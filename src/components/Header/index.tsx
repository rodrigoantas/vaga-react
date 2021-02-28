import React from 'react';

import { HeaderContainer, Logo, InputContainer, ButtonArea } from './styles';

import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Header:React.FC = () => {

  // const [searchValue, setSearchValue ] = useState('');



  return (
    <HeaderContainer>
      <Logo>
        <h1>Ecommerce!</h1>
      </Logo>
      
      <InputContainer>
        <input placeholder="Buscar produto"></input>
        <button><BsSearch color={'black'}/></button>
      </InputContainer>
      
      <ButtonArea>
        <Link to="/profile">
          <button><BsFillPersonFill size={40} color={'#00171F'} /> Perfil </button>
        </Link>
        <Link to="/cart">
          <button><HiShoppingCart size={40} color={'#00171F'}/> Carrinho </button>
        </Link>
        
      </ButtonArea>
     
    </HeaderContainer>
  )
}

export default Header