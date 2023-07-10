import { Container } from "./styles"
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Input } from '../Input'


import { FiMenu } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'//Maybe is the PiReceiptBold
import { RiSearchLine } from 'react-icons/ri'//Maybe is the PiReceiptBold


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
      <FiMenu onClick={showSiderbar} className='mobile' alt="User option menu" />
      {
        sidebar && <Sidebar viewType="mobile" active={setSidebar} />
      }
      <Logo isAdmin={isAdmin} />
      {/* mobile */}
      {!isAdmin && <PiReceipt onClick={handleOrderRedirect} className='mobile' alt="Receipt icon" />}
      {/* desktop */}

      {/* mobileHeader is for hiding the search bar in mobile devices */}
      <Input onChange={e => setSearchValue(e.target.value)} mobileHeader icon={<RiSearchLine />} placeholder='Search for dishes or ingredients' value={searchValue} />

      {/* desktop */}
      <Button icon={<PiReceipt />} onClick={handleClickRedirect} title={"Orders"} mobileHeader isAdmin={isAdmin} />
      {/* desktop */}
      {/* onClick={handleSignOut} */}

      <img onClick={showSiderbar} className='desktop userImg' src={UserPng} alt="User option menu" />
      {
        sidebar && <Sidebar viewType="desktop" active={setSidebar} />
      }

    </Container >
  )
}