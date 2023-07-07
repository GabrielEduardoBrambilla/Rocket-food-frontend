import { Container } from './styles';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react';
import { api } from "../../services/api";

const CARD_OPTIONS = {
  iconStyle: "solid",
  theme: "stripe",
}
// eslint-disable-next-line react/prop-types
export function PaymentForm({ ...rest }) {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  async function handleSubmit(e) {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await api.post("/payment", {
          amount: 1000,
          id
        })

        if (response.data.success) {
          console.log("payment successful")
          setSuccess(true)
        }
      } catch (error) {
        console.log("Error: " + error)
      }
    } else {
      console.log(error.message)
    }
  }


  return (
    <Container {...rest}>
      {!success ?
        <form onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <CardElement options={CARD_OPTIONS} />
          </fieldset>
          <button>Pay</button>
        </form>
        :
        <div>
          <h2>Congrats</h2>
        </div>
      }
    </Container>
  )
}