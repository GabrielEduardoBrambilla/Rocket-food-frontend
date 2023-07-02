import { Container, Content } from './styles'
import { FaHome, FaHeart, } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiReceipt } from 'react-icons/pi'
import { useAuth } from '../../hooks/auth'

import { SidebarItem } from '../SidebarItem'
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export function Sidebar({ active, viewType }) {
  const { signOut } = useAuth()
  const navigation = useNavigate()

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
  return (
    <Container className={viewType} view={viewType} sidebar={active}>
      <LiaTimesSolid onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaHeart} Text="Favorite List" />
        <SidebarItem onClick={handleOrderRedirect} Icon={PiReceipt} Text="Order" />
        <SidebarItem onClick={handleSignOut} Icon={LuLogOut} Text="Logout" />
        <div>
          <p>
            {viewType}
          </p>
        </div>
      </Content>
    </Container>
  )
}
