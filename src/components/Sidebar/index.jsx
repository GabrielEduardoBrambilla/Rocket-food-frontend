import { Container, Content } from './styles'
import { FaHome, FaHeart, } from 'react-icons/fa'
import { LiaTimesSolid } from 'react-icons/lia'

import SidebarItem from '../SidebarItem'

// eslint-disable-next-line react/prop-types
export function Sidebar({ active, viewType }) {

  function closeSidebar() {
    active(false);
  }

  return (
    <Container className={viewType} view={viewType} sidebar={active}>
      <LiaTimesSolid onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <div>
          <p>
            {viewType}
          </p>
        </div>
        <SidebarItem Icon={FaHeart} Text="Favorite List" />
      </Content>
    </Container>
  )
}
