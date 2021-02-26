import React, {useState, useCallback} from 'react';

import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom';



const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = useCallback(async (teste) => {
    try {
      teste.preventDefault();

      await signIn({email, password})


      history.push('/dashboard')
      

      
    } catch (err) {

      console.log(err)

    }
  }, [email, history, password, signIn])




  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
      <button type="submit"> Entrar </button>
    </form>
    </>
  )
}

export default SignIn;