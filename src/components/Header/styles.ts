import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: grid;
width: 100%;
height: 200px;
background-color: #3E4C5E;
grid-template-columns: 1fr 2fr 1fr;




> div {
  display: flex;
  align-items: center;
  justify-content: center;
}
`


export const Logo = styled.div`
a {
  color: white;
  &:hover {
    color: gray;
    transition: 0.5s;
  }
}
`

export const InputContainer = styled.div`

form {
  padding: 16px;
  padding-right: 5px;
  width: 100%;
  background-color: white;

  display: flex;
  align-items: center;
  height: 30px;

  align-self: center;

  border: 2px solid white;
  border-radius: 4px;


}

input {
  width: 100%;
  flex: 1;
  background-color: white;
  border: 0;
  font-family: 'Inter';
  font-size: 1rem;
  &::placeholder {
    color: #666360;
  }
}

button {
  border: none;
  width: 50px;
}
`

export const ButtonArea = styled.div`
button {
  margin: 20px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.5s;
    color: white;
  }
}
`