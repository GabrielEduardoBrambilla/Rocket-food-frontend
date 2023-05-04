import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Ingredient({ name }) {

  return (
    <Container>
      <p>{name}</p>
    </Container>
  )
}