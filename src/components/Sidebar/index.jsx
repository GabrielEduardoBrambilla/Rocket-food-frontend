import { Container, Content } from './styles'
import { FaHome, FaHeart, } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiReceipt, PiAddressBook } from 'react-icons/pi'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'

import { SidebarItem } from '../SidebarItem'
import { useNavigate } from 'react-router-dom';

import { useTheme } from 'styled-components';

// eslint-disable-next-line react/prop-types
export function Sidebar({ active, viewType }) {
  const { signOut } = useAuth()
  const navigation = useNavigate()
  const { isAdmin } = useAuth();
  const { toggleTheme } = useTheme();

  function closeSidebar() {
    active(false);
  }
  function handleSignOut() {
    navigation("/")
    signOut()
  }
  function handleOrderRedirect() {
    navigation("/order")
  }
  function handleHomeRedirect() {
    navigation("/")
  }
  function handleCreateDishRedirect() {
    navigation("/createdish")
  }
  console.log(!isAdmin)
  return (
    <Container className={viewType} view={viewType} sidebar={active}>
      <LiaTimesSolid className='close-btn' onClick={closeSidebar} />
      <Content>
        <SidebarItem onClick={handleHomeRedirect} Icon={FaHome} Text="Home" />
        {!isAdmin && <SidebarItem Icon={FaHeart} Text="Favorites" />}

        <SidebarItem onClick={handleOrderRedirect} Icon={PiReceipt} Text="Order" />

        {isAdmin && <SidebarItem onClick={handleCreateDishRedirect} Icon={MdOutlineAddToPhotos} Text="Add Dish" />}
        <button onClick={toggleTheme}>Toggle Theme</button>

        <SidebarItem onClick={toggleTheme} Icon={PiAddressBook} Text="Toggle Theme" />
        <SidebarItem onClick={handleSignOut} Icon={LuLogOut} Text="Logout" />

      </Content>
    </Container>
  )
}
