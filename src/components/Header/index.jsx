import { Logo } from '../Logo'
import menu from "../../assets/icons/Menu.svg"

export function Header() {
  return (
    <>
      <header>

        <img src={menu} alt="Menu de opções do usuario" />

        <Logo />


      </header>
    </>
  )
}