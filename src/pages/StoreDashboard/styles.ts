import styled from 'styled-components';

import {Link} from 'react-router-dom'


export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
width: 100%;
height: 100%;
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
display: flex;
flex-wrap: wrap;
height: fit-content;
justify-content: center;
align-items: center;
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
img {
  width: 170px;
  height: 200px;
  margin-bottom: 10px;

}

p {
  font-weight: bold;
  color: #00b200;
}

h3 {
 border-top: 1px solid black;
 padding-top: 20px;
}

section {
  display: flex;
  button {
    display: flex;
  }
}

&:hover {
    transform: scale(1.15);
    transition-duration: 200ms;
    
  }

`;
