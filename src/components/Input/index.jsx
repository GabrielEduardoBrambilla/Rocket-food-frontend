
import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, mobileHeader = false, ...rest }) {
  const hideInHeader = mobileHeader ? "desktop" : ""



  return (
    // signIn screen need the display in mobile, can't use desktop class 
    <Container className={hideInHeader}>
      {Icon && <img src={Icon} size={20} />}
      <input {...rest} />
    </Container>
  )
}