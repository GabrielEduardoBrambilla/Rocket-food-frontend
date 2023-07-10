import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

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
        return: ` ${window.location.origin}/completion`
      }
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  }



  return (
    <>
      <PaymentElement id="payment-element" />
      <form id='payment-form' onSubmit={handleSubmit}>
        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessing ? "Processing ..." : "Pay now"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}

      </form>
    </>
  )

} 