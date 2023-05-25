import { Container } from "./styles"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { IncludeButton } from '../../components/IncludeButton'
import { Link } from 'react-router-dom';

import { useState } from "react"
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Logo formHeader />
      <form action="">
        <p className="desktop-title">Create your account</p>
        <label htmlFor="user-name">Your name
          <Input id='user-name' label='email' type='text' placeholder='John Don' onChange={e => setName(e.target.value)} />
        </label>
        <label htmlFor="email">Email
          <Input id='email' label='email' type='text' placeholder='example@gmail.com' onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">Password
          <Input id='password' type='password' placeholder='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <IncludeButton title='Create account' onClick={handleSignUp} />
        <Link to="/">Login here!</Link>
      </form>
    </Container>
  )
}