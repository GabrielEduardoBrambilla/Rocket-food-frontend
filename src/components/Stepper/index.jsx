/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container } from "./styles";
import plus from "../../assets/icons/Plus.svg";
import minus from "../../assets/icons/Minus.svg";

export function Stepper({ defaultQuantity, setQuantity }) {
  const [quantity, setLocalQuantity] = useState(defaultQuantity || 1);

  function decreaseQuantity() {
    setLocalQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  function increaseQuantity() {
    setLocalQuantity((prevQuantity) => prevQuantity + 1);
  }

  // Update the quantity through the setQuantity prop, if provided
  React.useEffect(() => {
    if (setQuantity) {
      setQuantity(quantity);
    }
  }, [quantity, setQuantity]);

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
