import { Container } from "./styles"
import normalLogo from "../../assets/logo/logo.svg"
import footerLogo from "../../assets/logo/Footer.svg"

// eslint-disable-next-line react/prop-types
export function Logo({ isAdmin = false, footer = false }) {
  let logo = footer ? footerLogo : normalLogo

  // if (footer) {
  //   logo = footerLogo
  // } else {
  //   logo = normalLogo
  // }
  return (
    <Container>
      <img src={logo} alt="Polygonal shape" />
      <p>
        food explorer
        {isAdmin && <span>admin</span>}
      </p>
    </Container>
  )
}