import { Logo } from '../Logo'
import { Button } from '../Button'
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/receipt.svg"
import search from "../../assets/icons/search.svg"
import SignOut from "../../assets/icons/SignOut.svg"
import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export function Header({ isAdmin = false }) {

  return (
    <Container>
      {/* mobile */}
      <img className='mobile' src={menu} alt="User option menu" />

      <Logo isAdmin={isAdmin} />

      {/* mobile */}
      {!isAdmin && <img className='mobile' src={receipt} alt="Receipt icon" />}

      {/* desktop */}
      <div className='desktop'>
        <input type="text" />
        <img src={search} alt="search button" />
      </div>

      {/* desktop */}
      <Button />

      {/* desktop */}
      <img src={SignOut} alt="" className='desktop' />
    </Container>
  )
}