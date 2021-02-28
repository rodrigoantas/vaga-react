import React, {useState, useCallback} from 'react';


import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import Input from '../../components/Input'
import { Container, Content, AnimationContainer, Background, Button } from './styles';



const SignUp: React.FC = () => {


  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();


      await api.post('/users', {
        email,
        password,
        photo_url: null,
      })


      history.push('/')
      

      
    } catch (err) {

      console.log(err)

    }
  }, [email, history, password])


  return (
    <>
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <h1>Register now!</h1>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
            <Input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            <Button type="submit"> Register </Button>
          </form>
    <Link to="/">
      Back to Login
    </Link>
    </AnimationContainer>
      </Content>
    </Container>
    </>
  )
}

export default SignUp;