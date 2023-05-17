import { Container } from "./styles"
import normalLogo from "../../assets/logo/logo.svg"
import footerLogo from "../../assets/logo/Footer.svg"

// eslint-disable-next-line react/prop-types
export function Logo({ isAdmin = false, footer = false, formHeader = false }) {
  let logo = footer ? footerLogo : normalLogo

  // CSS classes 
  // .formHeader-img 
  // .formHeader-img 
  const imgClasses = formHeader ? "formHeader-img" : ""
  const pClasses = formHeader ? "formHeader-text" : ""

  return (
    <Container>
      <img className={imgClasses} src={logo} alt="Polygonal shape" />
      <p className={pClasses}>
        food explorer
        {isAdmin && <span>admin</span>}
      </p>
    </Container>
  )
}