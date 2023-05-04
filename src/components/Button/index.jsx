import { Container } from "./styles"
import receipt from "../../assets/icons/receipt.svg"


// eslint-disable-next-line react/prop-types
export function Button({ isAdmin = false, title }) {
  if (title) {
    return (
      <Container>
        <p>{title}</p>
      </Container>
    )
  }
  return (
    <Container>

      {isAdmin ? (
        <>
          <p>Novo Prato (0)</p>
        </>
      ) : (
        <>
          <img src={receipt} alt="Receipt icon" />
          <p>Meu pedido (0)</p>
        </>
      )}
    </Container>
  )
}