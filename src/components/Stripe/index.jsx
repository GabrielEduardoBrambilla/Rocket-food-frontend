import { Container } from './styles';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { PaymentForm } from './PaymentForm';
import { Payment } from './Payment';

// eslint-disable-next-line react/prop-types
export function Stripe({ ...rest }) {
  const PUBLIC_KEY = "pk_test_51NQwoVGx2rwi3ccLClviFVn5gpFbKcwa2xWOFNd5zscgn821vg0sBgnSpoogzU5kpdDQn0iIqUYATdl2YvmvIBEo00PJKNPcCX"

  const stripeTestPromise = loadStripe(PUBLIC_KEY)

  return (
    <Container {...rest}>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
        <Payment />
      </Elements>
    </Container>
  )
}