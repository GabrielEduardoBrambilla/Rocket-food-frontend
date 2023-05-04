import { Container } from "./styles"
import { Logo } from "../Logo"

// eslint-disable-next-line react/prop-types
export function Footer() {
  return (
    <Container>
      <Logo footer />
      <p>© 2023 - All rights reserved.</p>
    </Container>
  )
}