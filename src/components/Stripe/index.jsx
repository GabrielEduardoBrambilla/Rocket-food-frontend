import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "../../services/api";

export function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    async function fetchApiConfig() {
      const response = await api.get("/payment/config");
      const publishableKey = response.data.publishableKey
      setStripePromise(loadStripe(publishableKey));
    }
    fetchApiConfig()
  }, []);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.post("/payment/create", {
          orderPrice: 250,
        });
        const clientSecret = response.data.clientSecret;
        setClientSecret(clientSecret);
      } catch (error) {
        console.warn(error)
      }


    }
    fetchApi()
  }, []);
  const options = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    }
  };
  const appearance = {
    theme: 'flat',
    variables: { colorPrimaryText: '#262626' }
  };
  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, options, appearance }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );

}