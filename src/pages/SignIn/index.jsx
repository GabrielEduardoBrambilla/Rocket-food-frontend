import { Container } from "./styles";
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { IncludeButton } from '../../components/IncludeButton';
import { Link } from 'react-router-dom';

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo formHeader />
      <form onSubmit={handleSignIn}>
        <p className="desktop-title">Login</p>
        <label htmlFor="email">
          Email
          <Input
            onChange={e => setEmail(e.target.value)}
            id='email'
            label='email'
            type='text'
            placeholder='example@gmail.com'
          />
        </label>
        <label htmlFor="password">
          Password
          <Input
            onChange={e => setPassword(e.target.value)}
            id='password'
            placeholder='password'
          />
        </label>
        <IncludeButton title='SignIn' type='submit' />
        <Link to="/SignUp">New? SignUp here!</Link>
      </form>
    </Container>
  );
}
