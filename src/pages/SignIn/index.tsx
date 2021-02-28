import React, {useState, useCallback} from 'react';

import { useAuth } from '../../contexts/AuthContext'
import { useHistory, Link } from 'react-router-dom';

import Input from '../../components/Input'

import { Container, Content, AnimationContainer, Background, Button } from './styles';



const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();

      await signIn({email, password})


      history.push('/dashboard')
      

      
    } catch (err) {

      console.log(err)

    }
  }, [email, history, password, signIn])




  return (
    <>
    <Container>
      <Content>
        <AnimationContainer>
          
          <form onSubmit={handleSubmit}>
            <h1>Welcome to the Ecommerce!</h1>
            <h2>Login</h2>
            <Input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
            <Input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            <Button type="submit"> Entrar </Button>
          </form>
          <Link to="/signup">
            Create Account
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
    </>
  )
}

export default SignIn;