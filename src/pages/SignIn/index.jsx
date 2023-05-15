import { Container } from "./styles"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { IncludeButton } from '../../components/IncludeButton'
export function SignIn() {
  return (
    <Container>
      <Logo />
      <form action="">
        <label htmlFor="">Email</label>
        <Input label='email' type='text' placeholder='example@gmail.com' />
        <label htmlFor="">Password</label>
        <Input placeholder='password' />
        <IncludeButton title='SignIn' />
      </form>
      <a href="#">SignUp</a>
    </Container>
  )
}