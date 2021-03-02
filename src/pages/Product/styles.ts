import styled from 'styled-components';

export const ProductContainer = styled.div`
color: black;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
margin-top: 30px;
`


export const ProductBox = styled.div`
  height: fit-content;
  max-width: 1200px;
  background-color: white;

  display: flex;
  flex-direction: column;
  padding: 30px 100px; 
`

export const ProductUpperside = styled.div`
  display: flex;
  
`

export const ProductImageBox = styled.div`

display: flex;
justify-content: center;
padding: 30px;
margin-right: 50px;
height: 500px;
img {
   max-width: 400px;
   max-height: 100%;
}
`

export const ProductDetailBox = styled.div`
display: flex;
flex-direction: column;
h1 {
  margin-bottom: 40px;
}

p {
  margin-bottom: 40px;
}

h2 {
  color: #00b200;
  margin-bottom: 40px;
  margin-left: auto;
}

button {
  background: #3E4C5E;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: white;
  width: 300px;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.5s;
  align-self: center;
  justify-self: center;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #00171F;
    color: white;
  }

  svg {
    margin-left: 5px;
  }
}
`

export const Reviews = styled.div`
margin-top: 50px;
> h1 {
  border-bottom: 1px solid black;
  padding-bottom: 20px;
}
`

export const Review = styled.div`
display: flex;
border-bottom: 1px solid black;
padding: 5px;
margin: 10px 0;
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid black;
  margin: 30px;
}

> div {
  margin-top: 20px;
}

`

export const ZeroReview = styled.div``

export const AddReview = styled.div`
width: 100%;
display: flex;
flex-direction:column;

h1 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}
textarea {
  height: 150px;
  font-size: 16px;
  padding: 10px;
}

button {
  background: #3E4C5E;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: white;
  width: 300px;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.5s;
  align-self: flex-end;
  
  &:hover {
    background: #00171F;
    color: white;
  }
}


`