
import { Container } from "./styles"
import { IncludeButton } from '../IncludeButton'
import { Stepper } from '../Stepper'
import favIcon from '../../assets/icons/Heart.svg'
import editIcon from '../../assets/icons/Pencil.svg'
// eslint-disable-next-line react/prop-types
export function Card({ img, price, title, isAdmin = false, ...rest }) {
  let icon = isAdmin ? editIcon : favIcon
  return (
    <Container {...rest}>
      <img className="topLeftIcon" src={icon} alt="Top left icon" />
      <img src={img} alt="Dishe ilustrative image">
      </img>
      <p >{title} </p>
      <p className="description">Juice made with sweet Passion fruit</p>
      <span>R$ {price}</span>
      {!isAdmin && <div className="buttonsWrapper">
        <Stepper />
        <IncludeButton title='incluir' />
      </div>
      }
    </Container>
  )
}