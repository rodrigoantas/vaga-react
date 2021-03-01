import React, { useCallback, useState } from 'react';

import { HeaderContainer, Logo, InputContainer, ButtonArea } from './styles';

import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import { GoSignOut} from 'react-icons/go'
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext'


interface HeaderSeachProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header:React.FC<HeaderSeachProps> = ({setSearch}) => {

  const { signOut } = useAuth();



  const [searchValue, setSearchValue] = useState('')

  const handleSearch = useCallback((e)=> {
    e.preventDefault();
    setSearch(searchValue)
  },[searchValue, setSearch])


  return (
    <HeaderContainer>
      <Logo>
        <h1>Ecommerce!</h1>
      </Logo>

      <InputContainer>
        <form onSubmit={(e)=> handleSearch(e)}>
          <input  onChange={(e) => { e.preventDefault(); setSearchValue(e.target.value);}} placeholder="Buscar produto"/>
          <button onClick={(e)=> handleSearch(e)}><BsSearch color={'black'}/></button>
        </form>
        
     
      </InputContainer>
      
      <ButtonArea>
        <div>
          <Link to="/profile">
            <button><BsFillPersonFill size={40} color={'#00171F'} /> Perfil </button>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <button><HiShoppingCart size={40} color={'#00171F'}/> Carrinho </button>
          </Link>
        </div>
        <div>
          <button onClick={signOut}><GoSignOut size={37} color={'#00171F'}/> Sair </button>
        </div>
       
       
        
        
      </ButtonArea>
     
    </HeaderContainer>
  )
}

export default Header