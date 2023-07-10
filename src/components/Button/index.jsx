import { Container } from "./styles"


// eslint-disable-next-line react/prop-types
export function Button({ mobileHeader = false, title, icon, isAdmin = false, ...rest }) {
  const hideInHeader = mobileHeader ? "desktop" : ""

  return (
    <Container className={hideInHeader} {...rest}>

      {isAdmin ? (
        <>
          <p>New Dish</p>
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