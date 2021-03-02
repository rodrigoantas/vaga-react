import styled from 'styled-components';

import {Link} from 'react-router-dom'


export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
width: 100%;
height: 100%;
min-height: 100vh;
`;

export const FiltersContainer = styled.div`
background-color: white;
color: black;
height: 100%;
padding: 20px;
`;

export const FilterCategory = styled.div`

h1 {
  margin-bottom: 10px;
}
form {
  display: flex;
  flex-direction: column;

  input {
      margin-right: 5px;
      margin-top: 10px;
      margin-bottom: 10px;
  }
}
`;

export const CardsContainer = styled.div`
  > p {
  margin-left: 50px;
  margin-top: 20px;
  margin-right: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
}
`;

export const Card = styled(Link)`
color: black;
background-color: white;

width: 300px;
margin: 20px;
padding: 10px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
div {
  width: 170px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

p {
  margin-top: 10px;
  font-weight: bold;
  color: #00b200;
}

h3 {
 border-top: 1px solid black;
 padding-top: 20px;
 width: 100%;
 min-height: 67px;
}

section {
  display: flex;
  button {
    display: flex;
  }
}

&:hover {
    transform: scale(1.1);
    transition-duration: 200ms;
  }

`;


export const Cards = styled.div`
display: flex;
flex-wrap: wrap;
height: fit-content;
justify-content: center;
align-items: center;
`


export const EmptyList = styled.h1`
 margin-top: 100px;
 max-width: 700px;
 text-align: center;
`