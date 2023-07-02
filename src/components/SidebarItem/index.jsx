import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function SidebarItem({ Icon, Text, ...rest }) {
  return (
    <Container  {...rest}>
      <Icon />
      {Text}
    </Container>
  )
}
