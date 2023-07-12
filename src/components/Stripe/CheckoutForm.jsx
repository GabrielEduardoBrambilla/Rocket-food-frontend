import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { IncludeButton } from "../../components/IncludeButton"
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom'

export default function CheckoutForm(amount) {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    setIsProcessing(true)
    42
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.log(submitError);
      setIsProcessing(false)
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements,
    });
    setMessage(error)
    /*
    // Update the order status when the payment intent is confirmed
   
   */

    async function fetchApi() {
      console.log(amount.amount)
      try {
        const { data } = await api.post("/payment/create", {
          orderPrice: amount.amount,
          paymentMethodId: paymentMethod.id,
        });
        const status = data.status
        if (status == 'succeeded') {

          const fetch = async () => {
            const response = await api.patch('/payment/update', {
              status: "succeeded",
            })
            navigate(response.data.redirect)
          }
          fetch()
        }
      } catch (error) {
        console.warn(error)
      }
    }
    fetchApi()


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