
import { Container } from "./styles"
import { IncludeButton } from '../IncludeButton'
import { Stepper } from '../Stepper'
import favIcon from '../../assets/icons/Heart.svg'
import editIcon from '../../assets/icons/Pencil.svg'
import favoritedIcon from '../../assets/icons/favoritedIcon.svg'
import { useState, useEffect } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

// eslint-disable-next-line react/prop-types
export function Card({ id_Dish, img, price, title, description, isAdmin = false, ...rest }) {
  const { user } = useAuth();
  const [icon, setIcon] = useState(isAdmin ? editIcon : favIcon);
  // const [quantity, setQuantity] = useState("");

  const handleIconClick = () => {
    console.log(user, id_Dish);

    if (isAdmin) {
      // Redirect the admin to the editing screen or modal
      history.push('/edit'); // Replace '/edit' with the appropriate route
    } else {
      if (icon === favIcon) {
        setIcon(favoritedIcon);
        api.post("/favoritelist/delete", {
          id_User: user.id
          , id_Dish
        })
          .then(() => {
            alert("Add to favorites");
          }).catch(error => {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Not possible to be added to favorites");
            }
          });

      } else {
        setIcon(favIcon);
        api.delete("/favoritelist/delete", {
          id_User: user.id
          , id_Dish
        })
          .then(() => {
            alert("Removed from favorites");
          }).catch(error => {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Not possible to be deleted");
            }
          });
      }
    }
  }
  const [quantity, setQuantity] = useState(1);



  useEffect(() => {
    // This effect will run whenever the icon variable changes
    // It will trigger a re-render and update the displayed icon
  }, [icon]);


  return (
    <Container {...rest}>
      <img onClick={handleIconClick} className="topLeftIcon" src={icon} alt="Top left icon" />
      <img className="plateImg" src={img} alt="Dishe ilustrative image">
      </img>
      <p >{title} </p>
      <p className="description">{description}</p>
      <span>R$ {price * quantity}</span>
      {!isAdmin && (
        <div className="buttonsWrapper">
          <Stepper quantity={quantity} setQuantity={setQuantity} />
          <IncludeButton title="incluir" />
        </div>
      )}
    </Container>
  )
}