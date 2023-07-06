/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Stepper } from "../../components/Stepper";
import { FaTrashAlt } from "react-icons/fa";
import loading from "../../assets/icons/loading.jpg";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function DishItem({ dishDesc, dishImage, images, dishPrice, dishQuantity, dishName, dishId, handleOrderItemDelete, setItemTotalPrice, setQuantity }) {
  const [icon, setIcon] = useState(<MdOutlineFavorite />);
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/displaydish/${dishId}`)
  }
  function handleQuantityChange(newQuantity) {
    if (setQuantity) {
      setQuantity(newQuantity);
    }

  }

  function handleIconClick() {
    if (icon.type === MdOutlineFavoriteBorder) {
      setIcon(<MdOutlineFavorite />);
      api.post("/favoritelist/", {
        id_dish: dishId
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
          id_dish: dishId
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
  return (
    <Container  >
      <img onClick={handleRedirect} className="dish_img left-section" src={images[dishImage] || loading} alt={"Dish representative image"} />
      <div onClick={handleRedirect} className="middle-section">
        <p>{dishName}</p>
        {
          !dishDesc &&
          <Stepper
            dishId={dishId}
            itemPrice={dishPrice}
            setItemTotalPrice={setItemTotalPrice}
            defaultQuantity={dishQuantity}
            setQuantity={handleQuantityChange}
          />
        }
        {
          dishDesc &&
          <p className="dishDesc">
            {dishDesc}
          </p>
        }
      </div>
      {
        !dishDesc &&
        <FaTrashAlt onClick={() => handleOrderItemDelete(dishId)} className="right-section" />
      }
      {
        dishDesc &&
        <div onClick={handleIconClick} className="right-section" >
          {icon}
        </div>
      }
    </Container>
  );
}
