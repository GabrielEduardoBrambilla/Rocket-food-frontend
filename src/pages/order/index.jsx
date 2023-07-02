import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import { Stepper } from "../../components/Stepper";

export function Order() {
  const { user } = useAuth()
  const [quantity, setQuantity] = useState(1);
  const [userOrder, setUserOrder] = useState([]);


  useEffect(() => {

    async function fetchApi() {
      user.id
      const { data } = await api.get(`/order/index/${user.id}`);
      setQuantity(quantity)
      setUserOrder(data)
      console.log(userOrder)
    }

    fetchApi()
  }, [quantity, user.id])
  return (
    <Container>
      <Header />
      <div className="order-info-wrapper">
        <p>My order</p>
        {
          userOrder.map((item) => {
            return (
              <div key={String(item.dish_id)}>
                <img src="" alt={item.dish_img} />
                <p>{item.dish_name}</p>
                <Stepper quantity={item.quantity} setQuantity={setQuantity} />
                <span>Total</span>
              </div>
            )
          })
        }
      </div>
      <div className="payment-wrapper">

      </div>
    </Container>
  );
}
