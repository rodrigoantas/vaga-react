import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'

import { Content, FiltersContainer, FilterCategory, CardsContainer, Card, Cards, EmptyList } from './styles';


import api from '../../services/api'
import { Link } from 'react-router-dom';

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
  const [pricecFilter, setPriceFilter] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  const categoriesArray = useMemo(()=> {
    if ([menCategory, womenCategory, electronics, jewelery].every(item => item === "") ){
      return undefined
    } else {
      return [menCategory, womenCategory, electronics, jewelery]
    }
  },[electronics, jewelery, menCategory, womenCategory])


  const priceRange = useMemo(()=> {
    if (pricecFilter === '<100'){
      return {gte: 0, lte: 100}
    } else if (pricecFilter === '>100<200') {
      return {gte: 100, lte: 200}
    } else if (pricecFilter === '>200') {
      return {gte: 200, lte: Infinity}
    }
  }, [pricecFilter])

  useEffect(()=> {
    setIsLoading(true);
    async function loadProducts() {
      const productsRequest = await api.get('/products/', {
        params: {
          title_like: search ? search : undefined,
          category: categoriesArray,
          price_gte: priceRange?.gte,
          price_lte: priceRange?.lte,
        },
        
      })
      // um setTimeOut apenas para o loading aparecer em produção, já que os dados carregam muito rápido, mas não é necessário.
      setTimeout(() => {
        setProducts(productsRequest.data);
        setIsLoading(false);
      }, 1000);
      
    }
    
    loadProducts();
  },[categoriesArray, priceRange?.gte, priceRange?.lte, search])

  const addElipsis = useCallback((string: string)=> {
    return (string.length > 50) ? string.slice(0, 49) + '...' : string;
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
        <form onChange={(e: any)=> setPriceFilter(e.target.value)}>
        <label  htmlFor="0">  
            <input defaultChecked value="0" type="radio" name="price" id="0"/> 
            Todos os preços
          </label>
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
        { search ? <p> <Link to="/">&gt; Loja</Link> &gt; Resultados da pesquisa de "{search}" </p> : <p> <Link to="/">&gt; Loja</Link> </p> }
        <Cards>
          
        {isLoading ? <Loading/> : products.length > 0 ? products.map(product => {
          return (
            <Card key={product.id} to={`/store/${product.id}`}>
              <div>
                <img src={product.image} alt={product.title}/> 
              </div>
              <h3>{addElipsis(product.title)} &gt; </h3>
              <p>{formattedPrice(product.price)}</p>
            </Card>
          )
        }): <EmptyList>Infelizmente não achamos produto com esse nome! :(</EmptyList>}
        </Cards>


      </CardsContainer>    
    </Content>
    <Footer/>
    </>
  )
}

export default StoreDashboard;