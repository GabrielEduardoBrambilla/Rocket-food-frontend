import { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js"
import { api } from "../../services/api";

export function Payment() {
  const [stripePromise, setStripePromise] = useState(null)

  useEffect(() => {
    async function fetchKey() {

      const { publishableKey } = await api.get("config")
      setStripePromise(publishableKey)

      console.log(publishableKey)
    }
    fetchKey()
  }, [])


  return (
    <>
      <h1>Payment method</h1>
    </>
  )
}