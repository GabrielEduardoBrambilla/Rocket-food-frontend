
import { Container } from "./styles"
import { useState } from "react";
import plus from "../../assets/icons/Plus.svg"
import minus from "../../assets/icons/Minus.svg"

export function Stepper() {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  return (
    <Container >
      <button onClick={decreaseQuantity}><img src={minus} alt="" /></button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}><img src={plus} alt="" /></button>
    </Container>
  );
}