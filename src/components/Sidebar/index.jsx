import { Container, Content } from './styles'
import { FaHome, FaHeart, } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiReceipt } from 'react-icons/pi'
import { MdOutlineAddToPhotos, MdDarkMode, MdSunny } from 'react-icons/md'//Dark Mode is the default value for the State object, I want to toggle between dark and light (MdDarkMode and MdSunny), in the handleThemeChange
import { useAuth } from '../../hooks/auth'

import { SidebarItem } from '../SidebarItem'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Sidebar({ active, viewType }) {
  const { signOut } = useAuth()
  const navigation = useNavigate()
  const { isAdmin } = useAuth();

  const [icon, setThemeIcon] = useState("Dark");

  function handleThemeIconChange() {
    if (icon === "Dark") {
      setThemeIcon("Light");
    } else {
      setThemeIcon("Dark");

    }
  }

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
  function handleFavListRedirect() {
    navigation("/favorites")
  }
  function handleCreateDishRedirect() {
    navigation("/createdish")
  }

  return (
    <Container className={viewType} view={viewType} sidebar={active}>
      <LiaTimesSolid className='close-btn' onClick={closeSidebar} />
      <Content>
        <SidebarItem onClick={handleHomeRedirect} Icon={FaHome} Text="Home" />
        {!isAdmin && <SidebarItem onClick={handleFavListRedirect} Icon={FaHeart} Text="Favorites" />}

        <SidebarItem onClick={handleOrderRedirect} Icon={PiReceipt} Text="Order" />

        {isAdmin && <SidebarItem onClick={handleCreateDishRedirect} Icon={MdOutlineAddToPhotos} Text="Add Dish" />}

        <label htmlFor="toggleButton">
          <SidebarItem onClick={handleThemeIconChange} Icon={icon === "Dark" ? MdSunny : MdDarkMode} Text={"Toggle " + [icon === "Light" ? "Dark" : "Light"] + " Mode"} />
        </label>
        <SidebarItem onClick={handleSignOut} Icon={LuLogOut} Text="Logout" />

      </Content>
    </Container>
  )
}
