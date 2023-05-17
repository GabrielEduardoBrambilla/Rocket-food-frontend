
import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest }) {

  return (
    <Container className='desktop'>
      {Icon && <img src={Icon} size={20} />}
      <input {...rest} />
    </Container>
  )
}