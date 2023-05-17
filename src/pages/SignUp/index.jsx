import { Container } from "./styles"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { IncludeButton } from '../../components/IncludeButton'
export function SignUp() {
  return (
    <Container>
      <Logo formHeader />
      <form action="">
        <p className="desktop-title">Create your account</p>
        <label htmlFor="user-name">Your name
          <Input id='user-name' label='email' type='text' placeholder='John Don' />
        </label>
        <label htmlFor="email">Email
          <Input id='email' label='email' type='text' placeholder='example@gmail.com' />
        </label>
        <label htmlFor="password">Password
          <Input id='password' placeholder='password' />
        </label>
        <IncludeButton title='Create account' type='submit' />
        <a href="#">Login here!</a>
      </form>
    </Container>
  )
}