import { Logo } from '../Logo'
import { Button } from '../Button'
import { Input } from '../Input'
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/receipt.svg"
import search from "../../assets/icons/search.svg"
import SignOutImg from "../../assets/icons/SignOut.svg"
import { Container } from "./styles"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'

// eslint-disable-next-line react/prop-types
export function Header({ isAdmin = false }) {
  const { signOut } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }
  return (
    <Container>

      {/* mobile */}
      <img className='mobile' src={menu} alt="User option menu" />
      <Logo isAdmin={isAdmin} />
      {/* mobile */}
      {!isAdmin && <img className='mobile' src={receipt} alt="Receipt icon" />}
      {/* desktop */}
      {/* mobileHeader is for hiding the search bar in mobile devices */}
      <Input mobileHeader icon={search} placeholder='Search for dishes or ingredients' />
      {/* desktop */}
      <Button icon={receipt} title={"Pedidos (0)"} mobileHeader isAdmin={isAdmin} />
      {/* desktop */}
      <img onClick={handleSignOut} src={SignOutImg} alt="" className='desktop' />
    </Container>
  )
}