import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
  background-color: #3E4C5E;
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px)

}
to {
  opacity: 1;
  transform: translateX(0)

}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    h2 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: #00171F;
      }
    }
  }

  > a {
    color: white;
    display: block;
    text-decoration: none;
    transition: 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: #00171F;
    }
  }

  @media (max-width: 400px) {
    form {
      width: 300px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: #00171F;
`;


export const Button = styled.button`
  background: white;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #00171F;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    background: #00171F;
    color: white;
  }

`


export const Input = styled.div`
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
    font-size: 16px;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
`;