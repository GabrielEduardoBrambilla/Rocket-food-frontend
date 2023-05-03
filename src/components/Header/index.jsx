import { Logo } from '../Logo'
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/receipt.svg"
import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Header({ isAdmin = true }) {
  return (
    <Container>

      <img src={menu} alt="User option menu" />

      <Logo isAdmin={isAdmin} />

      {!isAdmin && <img src={receipt} alt="Receipt icon" />}
    </Container>
  )
}