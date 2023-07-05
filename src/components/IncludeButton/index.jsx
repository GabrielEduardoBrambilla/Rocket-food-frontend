import { Container } from "./styles"


// eslint-disable-next-line react/prop-types
export function IncludeButton({ title, ...rest }) {
  return (
    <Container {...rest} >
      <p>{title}</p>
    </Container>
  )
}