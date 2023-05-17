import { Container } from "./styles"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { IncludeButton } from '../../components/IncludeButton'
export function SignIn() {
  return (
    <Container>
      <Logo formHeader />
      <form action="">
        <p className="desktop-title">Login</p>
        <label htmlFor="email">Email
          <Input id='email' label='email' type='text' placeholder='example@gmail.com' />
        </label>
        <label htmlFor="password">Password
          <Input id='password' placeholder='password' />
        </label>
        <IncludeButton title='SignIn' type='submit' />
        <a href="#">New? SignUp here!</a>
      </form>
    </Container>
  )
}