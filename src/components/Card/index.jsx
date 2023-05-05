
import { Container } from "./styles"
import { IncludeButton } from '../ButtonInclude'
import { Stepper } from '../Stepper'
import favIcon from '../../assets/icons/Heart.svg'
// eslint-disable-next-line react/prop-types
export function Card({ img, price, title, ...rest }) {
  let icon = favIcon
  return (
    <Container {...rest}>
      <img className="Icon" src={icon} alt="Top left icon" />
      <img src={img} alt="Dishe ilustrative image">

      </img>
      <p >{title} </p>
      <span>R$ {price}</span>
      <Stepper />
      <IncludeButton title='incluir' />
    </Container>
  )
}