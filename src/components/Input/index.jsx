
import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, mobileHeader = false, isImage, ...rest }) {
  const hideInHeader = mobileHeader ? "desktop" : ""
  const inputDisplay = isImage ? "hideInput" : "showInput"


  return (
    // signIn screen need the display in mobile, can't use desktop class 
    <Container className={hideInHeader}>
      {Icon && Icon}
      {
        isImage &&
        <label htmlFor={rest.id}>{rest.text}</label>
      }

      <input className={inputDisplay} id={rest.id} {...rest} />
    </Container>
  )
}