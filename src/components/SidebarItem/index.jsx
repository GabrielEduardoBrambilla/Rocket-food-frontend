import { Container } from './styles'

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem