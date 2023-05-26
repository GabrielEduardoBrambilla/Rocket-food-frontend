import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function IngredientTag({ name }) {

  return (
    <Container>
      <p>{name}</p>
    </Container>
  )
}