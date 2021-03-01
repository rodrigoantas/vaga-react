import styled, { keyframes } from 'styled-components';



const rotateAnimation = keyframes`
to {
  transform: rotate(360deg)
}
`

export const LoadingContainer = styled.div`
margin-top: 200px;
width: 200px;
height: 200px;
border: 5px solid #3E4C5E;
border-top-color: white;
border-radius: 50%;
animation: ${rotateAnimation} 1s linear infinite;
`
