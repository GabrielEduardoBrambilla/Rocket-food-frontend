
import { Container } from "./styles"
import { IncludeButton } from '../IncludeButton'
import { Stepper } from '../Stepper'
import { useState, useEffect } from "react"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from 'react-router-dom';

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { MdOutlineFavorite } from 'react-icons/md'



// eslint-disable-next-line react/prop-types
export function Card({ redirect, id_Dish, img, price, title, description, ...rest }) {
  const { user, isAdmin } = useAuth();
  const [icon, setIcon] = useState(<MdOutlineFavoriteBorder />);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();


  function handleIconClick() {
    if (isAdmin) {
      navigate(`/editdish/${id_Dish}`);

    } else {
      if (icon.type === MdOutlineFavoriteBorder) {
        setIcon(<MdOutlineFavorite />);
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
        setIcon(<MdOutlineFavoriteBorder />);
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

  function handleOrderInclude() {
    async function fetch() {
      console.log("User " + user.id)
      console.log("Dish " + id_Dish)
      console.log("Quant " + quantity)
      console.log("Price " + price)
      await api.post(`/order/`, {
        id_user: user.id,
        id_dish: id_Dish,
        selectedQuantity: quantity,
        dishPrice: price
      });
    }

    fetch()
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
            setIcon(<MdOutlineFavorite />);
          } else {
            setIcon(isAdmin ? <PiPencilSimpleBold /> : <MdOutlineFavorite />);
          }
        }
      } catch (error) {
        // Handle the error if the request fails
        // console.error(error);
      }
    }

    fetchData();

  }, [id_Dish, isAdmin, user.id]);

  const fixedQuantity = price * quantity;
  return (
    <Container {...rest}>
      {/* <img onClick={handleIconClick} className="topLeftIcon" src={icon} alt="Top left icon" /> */}
      <img onClick={handleRedirect} className="plateImg" src={img} alt="Dishe ilustrative image" />
      <div onClick={handleIconClick} className="topLeftIcon" >
        {icon}
      </div>

      <p onClick={handleRedirect} className="title">{title} </p>
      <p onClick={handleRedirect} className="description">{description}</p>
      <div>
        <span className="price">R$ {fixedQuantity.toFixed(2)}</span>
        {!isAdmin && (
          <div className="buttonsWrapper">
            <Stepper setQuantity={setQuantity} />
            <IncludeButton onClick={handleOrderInclude} title="incluir" />
          </div>
        )}
      </div>
    </Container>
  )
}