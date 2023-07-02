import { Container } from "./styles";

import { Header } from "../../components/Header";
import { useEffect } from "react";
import { useAuth } from '../../hooks/auth'

export function Order() {
  const { user } = useAuth()
  useEffect(() => {

    async function fetchApi() {

    }

    fetchApi()
  }, [])

  return (
    <Container>
      <Header />
      <div className="order-info-wrapper">
        <p>My order</p>
        {
          // show every item in the order
        }
        <span>Total: ${ }</span>
      </div>
      <div className="payment-wrapper">

      </div>
    </Container>
  );
}
