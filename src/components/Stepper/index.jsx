/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "./styles";
import plus from "../../assets/icons/Plus.svg";
import minus from "../../assets/icons/Minus.svg";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth'

export function Stepper({ defaultQuantity, setQuantity, dishId, itemPrice, setItemTotalPrice }) {
  const [quantity, setLocalQuantity] = useState(defaultQuantity || 1);
  const { user } = useAuth()

  function increaseQuantity() {
    setLocalQuantity((prevQuantity) => prevQuantity + 1);

    PatchApi()
  }
  function decreaseQuantity() {
    setLocalQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    PatchApi()
  }

  async function PatchApi() {
    if (dishId) {
      try {
        await api.patch("order/update", {
          id_user: user.id,
          id_dish: dishId,
          selectedQuantity: quantity,
          dishPrice: itemPrice

        });
        if (setItemTotalPrice) {
          setItemTotalPrice(prevItemTotalPrice => ({
            ...prevItemTotalPrice,
            [dishId]: quantity * itemPrice
          }));
        }
      } catch (error) {
        // Handle error
      }
    }
  }

  // Update the quantity through the setQuantity prop, if provided
  useEffect(() => {
    if (setQuantity) {
      setQuantity(quantity);
    }
  }, [quantity, setQuantity]);

  useEffect(() => {
    PatchApi()


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, setLocalQuantity])

  return (
    <Container>
      <button onClick={decreaseQuantity}>
        <img src={minus} alt="" />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>
        <img src={plus} alt="" />
      </button>
    </Container>
  );
}
