import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { IncludeButton } from "../../components/IncludeButton"

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    setIsProcessing(true)
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: ` ${window.location.origin}/completion`
      }
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred. Try again later");
    }
    setIsProcessing(false);
  }



  return (
    <>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <IncludeButton title={isProcessing ? "Processing ..." : "Pay now"} disabled={isProcessing || !stripe || !elements} id="submit" />

        {message && <div id="payment-message">{message}</div>}

      </form>
    </>
  )

} 