import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header'

import { Content, FiltersContainer, FilterCategory, CardsContainer, Card, Cards } from './styles';

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

  const [search, setSearch] = useState('')
  const [menCategory, setMenCategory] = useState('')
  const [womenCategory, setWomenCategory] = useState('')
  const [electronics, setElectronics] = useState('')
  const [jewelery, setJewelery] = useState('')


  const categoriesArray = useMemo(()=> {
    if ([menCategory, womenCategory, electronics, jewelery].every(item => item === "") ){
      console.log([menCategory, womenCategory, electronics, jewelery])
      console.log('retornando undefined')
      return undefined
    } else {
      console.log('retornando array')
      console.log([menCategory, womenCategory, electronics, jewelery])
      return [menCategory, womenCategory, electronics, jewelery]
    }
  },[electronics, jewelery, menCategory, womenCategory])
  

  useEffect(()=> {
    async function loadProducts() {
      const teste = await api.get('/products', {
        params: {
          title_like: search ? search : undefined,
          category: categoriesArray

        },
        
      })
      setProducts(teste.data);
    }
    
    loadProducts();
  },[categoriesArray, search])

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
    <Header setSearch={setSearch}/>
    <Content>
      <FiltersContainer>
        <FilterCategory>
          <h1>Categorias</h1>
          <form>
            <label  htmlFor="men">
              <input onChange={(e)=> {e.target.checked ? setMenCategory(e.target.value) : setMenCategory('')}} value="men" type="checkbox" name="category" id="men"/> 
              Masculino
            </label>
            <label htmlFor="women">
              <input onChange={(e)=> {e.target.checked ? setWomenCategory(e.target.value) : setWomenCategory('')}} value="women" type="checkbox" name="category" id="women"/> 
              Feminino
            </label>
            <label htmlFor="jewelery">
              <input onChange={(e)=> {e.target.checked ? setElectronics(e.target.value) : setElectronics('')}} value="jewelery" type="checkbox" name="category" id="jewelery"/> 
              Jóias
            </label>
            <label htmlFor="electronics">
              <input onChange={(e)=> {e.target.checked ? setJewelery(e.target.value) : setJewelery('')}} value="electronics" type="checkbox" name="category" id="electronics"/> 
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
        { search ? <p> &gt; Loja &gt; Resultados da pesquisa de "{search}" </p> : <p> &gt; Loja </p> }
        <Cards>
        {products.map(product => {
          return (
            <Card key={product.id} to="/">
              <img src={product.image} alt={product.title}/> 
              <h3>{addElipsis(product.title)}</h3>
              <p>{formattedPrice(product.price)}</p>
            </Card>
          )
        })}
        </Cards>

      </CardsContainer>    
    </Content>
    </>
  )
}

export default StoreDashboard;