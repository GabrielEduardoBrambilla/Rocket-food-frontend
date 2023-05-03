import { Container } from "./styles"
import logo from "../../assets/logo/logo.svg"

// eslint-disable-next-line react/prop-types
export function Logo({ isAdmin = false }) {
  return (
    <Container>
      <img src={logo} alt="Polygonal shape" />
      <p>
        food explorer
        {isAdmin && <p>admin</p>}

      </p>
    </Container>
  )
}