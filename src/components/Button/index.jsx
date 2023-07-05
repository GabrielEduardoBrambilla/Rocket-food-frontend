import { Container } from "./styles"


// eslint-disable-next-line react/prop-types
export function Button({ mobileHeader = false, title, icon, isAdmin = false, ...rest }) {
  const hideInHeader = mobileHeader ? "desktop" : ""

  return (
    <Container className={hideInHeader} {...rest}>

      {isAdmin ? (
        <>
          <p>Novo Prato</p>
        </>
      ) : (
        <>
          {icon}
          <p>{title}</p>
        </>
      )}
    </Container>
  )
}