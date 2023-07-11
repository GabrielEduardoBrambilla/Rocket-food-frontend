import { useEffect, useState, useContext } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "../../services/api";
import { Container } from "./styles";
import { ThemeContext } from 'styled-components';

export function Payment(priceToPay, pay) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const theme = useContext(ThemeContext);
  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: 'night',
      labels: 'floating',
      variables: {
        colorBackground: theme.COLORS.DARK[700],
        colorText: theme.COLORS.LIGHT[100],
        spacingUnit: '4px',
      }
    },
    loader: "always",
    automatic_payment_methods: { enabled: true },
    layout: "tabs",
  };

  useEffect(() => {
    async function fetchApiConfig() {
      const response = await api.get("/payment/config");
      const publishableKey = response.data.publishableKey
      setStripePromise(loadStripe(publishableKey));
    }
    console.log(priceToPay)

    fetchApiConfig()
  }, []);

  useEffect(() => {
    async function fetchApi() {
      try {
        const orderPrice = priceToPay.orderPrice
        const response = await api.post("/payment/create", {
          orderPrice: 2500,
        });
        const clientSecret = response.data.clientSecret;
        setClientSecret(clientSecret);
      } catch (error) {
        console.warn(error)
      }


    }
    fetchApi()
  }, [priceToPay, priceToPay.orderPrice, pay]);

  return (
    <Container>
      {clientSecret && stripePromise && options && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );

}