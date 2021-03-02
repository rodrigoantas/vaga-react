import styled from 'styled-components';

export const InputContainer = styled.div`
background: #00171F;

padding: 16px;
width: 100%;

display: flex;
align-items: center;

border: 2px solid white;
& + div {
  margin-top: 8px;
}

input {
  width: 100%;

  flex: 1;
  background: transparent;
  border: 0;
  font-family: 'Inter';
  font-size: 1rem;
  color: #f4ede8;
  &::placeholder {
    color: #666360;
  }
}
`