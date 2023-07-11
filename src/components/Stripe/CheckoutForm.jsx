import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { IncludeButton } from "../../components/IncludeButton"
import { api } from "../../services/api";

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
        return_url: `${window.location.href}/successfulPayment`,
      },
    }).then(function (result) {

      // Update the order status when the payment intent is confirmed
      if (result.status === 'succeeded') {
        console.warn(elements)
        const fetch = async () => {
          await api.patch('/payment/update', {
            status: result.status,
          })
        }
        console.log("Fetch " + fetch)
      }
      if (result.error) {
        console.log("Error in confirmPayment" + result.error)
        // Inform the customer that there was an error.
      }
    });



    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage(error.message);
    }
    setIsProcessing(false);
  }



  return (
    <>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <IncludeButton className={"pay-btn"} title={isProcessing ? "Processing ..." : "Pay now"} disabled={isProcessing || !stripe || !elements} id="submit" />

        {message && <div id="payment-message">{message}</div>}

      </form>
    </>
  )

} 