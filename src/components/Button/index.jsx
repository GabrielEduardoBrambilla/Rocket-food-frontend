import { Container } from "./styles"


// eslint-disable-next-line react/prop-types
export function Button({ mobileHeader = false, title, icon, isAdmin = false }) {
  const hideInHeader = mobileHeader ? "desktop" : ""

  return (
    <Container className={hideInHeader}>

      {isAdmin ? (
        <>
          <p>Novo Prato (0)</p>
        </>
      ) : (
        <>
          <img src={icon} alt="Receipt icon" />
          <p>{title}</p>
        </>
      )}
    </Container>
  )
}