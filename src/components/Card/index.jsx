
import { Container } from "./styles"
import { IncludeButton } from '../IncludeButton'
import { Stepper } from '../Stepper'
import favIcon from '../../assets/icons/Heart.svg'
import editIcon from '../../assets/icons/Pencil.svg'
import favoritedIcon from '../../assets/icons/favoritedIcon.svg'
import { useState, useEffect } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from 'react-router-dom';

// favoritelist

// eslint-disable-next-line react/prop-types
export function Card({ redirect, id_Dish, img, price, title, description, ...rest }) {
  const { user, isAdmin } = useAuth();
  const [icon, setIcon] = useState();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();


  function handleIconClick() {
    if (isAdmin) {
      navigate(`/editdish/${id_Dish}`);

    } else {
      if (icon === favIcon) {
        setIcon(favoritedIcon);
        api.post("/favoritelist/", {
          id_user: user.id,
          id_dish: id_Dish
        })
          .then(() => {
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
          data: {
            id_user: user.id,
            id_dish: id_Dish
          }
        })
          .then(() => {
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

  function handleRedirect() {
    navigate(`/${redirect}`)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (id_Dish !== undefined && user.id !== undefined) {

          const response = await api.get("/favoritelist/show", {
            params: {
              id_user: user.id,
              id_dish: id_Dish
            }
          });

          const { favorite } = response.data;

          if (favorite) {
            setIcon(favoritedIcon);
          } else {
            setIcon(isAdmin ? editIcon : favIcon);
          }
        }
      } catch (error) {
        // Handle the error if the request fails
        // console.error(error);
      }
    }

    fetchData();

  }, [id_Dish, isAdmin, user.id]);

  return (
    <Container {...rest}>
      <img onClick={handleIconClick} className="topLeftIcon" src={icon} alt="Top left icon" />
      <img onClick={handleRedirect} className="plateImg" src={img} alt="Dishe ilustrative image">
      </img>
      <p onClick={handleRedirect} className="title">{title} </p>
      <p onClick={handleRedirect} className="description">{description}</p>
      <div>
        <span className="price">R$ {price * quantity}</span>
        {!isAdmin && (
          <div className="buttonsWrapper">
            <Stepper quantity={quantity} setQuantity={setQuantity} />
            <IncludeButton title="incluir" />
          </div>
        )}
      </div>
    </Container>
  )
}