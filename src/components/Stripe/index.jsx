import { useEffect, useState, useContext } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "../../services/api";
import { Container } from "./styles";
import { ThemeContext } from 'styled-components';

export function Payment(orderPrice, re_render) {
  const [stripePromise, setStripePromise] = useState(null);
  const theme = useContext(ThemeContext);
  const [paymentOrder, setPaymentOrder] = useState(false);
  const [options, setOptions] = useState(
    {
      mode: 'payment',
      paymentMethodCreation: 'manual',
      amount: 1099,
      currency: 'usd',
      appearance: {
        theme: 'night',
        labels: 'floating',
        variables: {
          colorBackground: theme.COLORS.DARK[700],
          colorText: theme.COLORS.LIGHT[100],
          spacingUnit: '4px',
        }
      },
    });

  // fetch Config (publishableKey) from the Api for the Stripe promise
  useEffect(() => {
    async function fetchApiConfig() {
      const response = await api.get("/payment/config");
      const publishableKey = response.data.publishableKey
      setStripePromise(loadStripe(publishableKey));
    }

    fetchApiConfig()
    setPaymentOrder(orderPrice.orderPrice)
  }, [orderPrice.orderPrice]);

  useEffect(() => {
    setOptions({
      mode: 'payment',
      paymentMethodCreation: 'manual',
      amount: 1099,
      currency: 'usd',
      appearance: {
        theme: 'night',
        labels: 'floating',
        variables: {
          colorBackground: theme.COLORS.DARK[700],
          colorText: theme.COLORS.LIGHT[100],
          spacingUnit: '5px',
        }
      },
    })
  }, [re_render])
  return (
    <Container>
      {paymentOrder && stripePromise && options && orderPrice && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm amount={paymentOrder} />
        </Elements>
      )}
    </Container>
  );

}