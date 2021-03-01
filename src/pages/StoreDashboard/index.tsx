import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header'

import { Content, FiltersContainer, FilterCategory, CardsContainer, Card } from './styles';

import api from '../../services/api'

interface IProducts {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

const StoreDashboard: React.FC = () => {

  const [products, setProducts] = useState<IProducts[]>([]);

  

  useEffect(()=> {
    async function loadProducts() {
      const { data } = await api.get('/products')
      setProducts(data);
    }
    
    loadProducts();
  },[])

  const addElipsis = useCallback((string: string)=> {
    return (string.length > 54) ? string.slice(0, 53) + '...' : string;
  },[])

  const formattedPrice = useCallback((price: number)=> {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  },[])

  return (
    <>
    <Header/>
    <Content>
      <FiltersContainer>
        <FilterCategory>
          <h1>Categorias</h1>
          <form>
            <label  htmlFor="men">
              <input onChange={(e)=> console.log(e.target.checked)} value="men" type="checkbox" name="category" id="men"/> 
              Masculino
            </label>
            <label htmlFor="women">
              <input onChange={(e)=> console.log(e.target.checked)} value="women" type="checkbox" name="category" id="women"/> 
              Feminino
            </label>
            <label htmlFor="jewelery">
              <input onChange={(e)=> console.log(e.target.checked)} value="jewelery" type="checkbox" name="category" id="jewelery"/> 
              Jóias
            </label>
            <label htmlFor="electronics">
              <input onChange={(e)=> console.log(e.target.checked)} value="electronics" type="checkbox" name="category" id="electronics"/> 
              Eletrônicos
            </label>
          </form>
        </FilterCategory>
        <FilterCategory>
        <h1>Preço</h1>
        <form onChange={(e: any)=> console.log(e.target.value)}>
          <label htmlFor="<100">  
            <input value="<100" type="radio" name="price" id="<100"/> 
            Menor que 100R$
          </label>
          <label htmlFor=">100<200"> 
            <input value=">100<200" type="radio" name="price" id=">100<200"/> 
            Maior que 100R$ e menor que 200R$ 
          </label>
          <label htmlFor=">200"> 
            <input value=">200" type="radio" name="price" id=">200"/> 
            Maior que 200R$ 
          </label>
        </form>

          </FilterCategory>
      </FiltersContainer>
      <CardsContainer>

        <Card to="/teste">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>{addElipsis('BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats')}</h3>
          <section>
            <p>100,00R$</p>
          </section>
          
        </Card>
        <Card to="/">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
          <p>100,00R$</p>
        </Card>
        <Card to="/">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
          <p>100,00R$</p>
        </Card>
        <Card to="/">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
          <p>100,00R$</p>
        </Card>
        <Card to="/">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
          <p>100,00R$</p>
        </Card>
        <Card to="/">
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="teste"/> 
          <h3>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</h3>
          <p>100,00R$</p>
        </Card>

        {products.map(product => {
          return (
            <Card key={product.id} to="/">
              <img src={product.image} alt={product.title}/> 
              <h3>{addElipsis(product.title)}</h3>
              <p>{formattedPrice(product.price)}</p>
            </Card>
          )
        })}

      </CardsContainer>    
    </Content>
    </>
  )
}

export default StoreDashboard;