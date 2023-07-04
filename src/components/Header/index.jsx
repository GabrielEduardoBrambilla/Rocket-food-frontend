import { Container } from "./styles"
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Input } from '../Input'
import menu from "../../assets/icons/Menu.svg"
import receipt from "../../assets/icons/receipt.svg"
import search from "../../assets/icons/search.svg"
// import SignOutImg from "../../assets/icons/SignOut.svg"
import UserPng from "../../assets/icons/user2.png"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'
import { Sidebar } from "../Sidebar"
import { useState } from 'react'



// eslint-disable-next-line react/prop-types
export function Header({ searchValue, setSearchValue }) {
  const { isAdmin } = useAuth()
  const navigation = useNavigate()





  function handleClickRedirect() {
    if (isAdmin) {
      navigation("/createdish")
    } else {
      navigation("/order")

    }
  }


  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar);
  function handleOrderRedirect() {
    navigation("/order")
  }
  return (
    <Container>
      {/* mobile */}
      <img onClick={showSiderbar} className='mobile' src={menu} alt="User option menu" />
      {
        sidebar && <Sidebar viewType="mobile" active={setSidebar} />
      }
      <Logo isAdmin={isAdmin} />
      {/* mobile */}
      {!isAdmin && <img onClick={handleOrderRedirect} className='mobile' src={receipt} alt="Receipt icon" />}
      {/* desktop */}
      {/* mobileHeader is for hiding the search bar in mobile devices */}
      <Input onChange={e => setSearchValue(e.target.value)} mobileHeader icon={search} placeholder='Search for dishes or ingredients' value={searchValue} />
      {/* desktop */}
      <Button icon={receipt} onClick={handleClickRedirect} title={"Pedidos (0)"} mobileHeader isAdmin={isAdmin} />
      {/* desktop */}
      {/* onClick={handleSignOut} */}

      <img onClick={showSiderbar} className='desktop userImg' src={UserPng} alt="User option menu" />
      {
        sidebar && <Sidebar viewType="desktop" active={setSidebar} />
      }

    </Container >
  )
}