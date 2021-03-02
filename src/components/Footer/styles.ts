import styled from 'styled-components';


export const FooterContainer = styled.div`
background-color: #3E4C5E;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> div:nth-child(1){
  display: flex;
  ul {
    padding: 50px;
  }
  ul:nth-child(1){
    border-right: 1px solid white;
  }

}

> div:nth-child(2){
  margin-top: 50px;
  margin-bottom: 10px;
}

a {
  color: white;
  &:hover {
    color: gray;
    transition: 0.5s;
  }
}

li {
  list-style: circle;
}
`