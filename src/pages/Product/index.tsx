import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { HiShoppingCart } from 'react-icons/hi';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api';

import {ProductContainer, ProductBox, ProductImageBox, ProductDetailBox, Reviews, Review, ProductUpperside,AddReview, ZeroReview } from './styles';

interface IProductParams {
  product: string;
}

interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

const Product: React.FC = () => {

  const [product, setProduct ] = useState<IProduct>({} as IProduct)

  const { params } = useRouteMatch<IProductParams>();



  useEffect(()=> {
    async function loadProduct(){
      const {data} = await api.get(`/products/${params.product}`)

      setProduct(data)
    }

    loadProduct();

  }, [params.product])

  useEffect(()=> {
    async function loadReviews(){
      const {data} = await api.get('/reviews/')
      console.log(data);
    }
    loadReviews();
  })

  const formattedPrice = useCallback((price: number)=> {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  },[])

  return (

    <>
      <Header/>
      <ProductContainer>
        <ProductBox>
          <ProductUpperside>
            <ProductImageBox>
              <img src={product.image} alt={product.title}/>
            </ProductImageBox>
            <ProductDetailBox>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <h2>{formattedPrice(product.price)}</h2>
              <button>Adicionar ao carrinho <HiShoppingCart size={20} /> </button>
            </ProductDetailBox>
          </ProductUpperside>
            
          
          <Reviews>
            <h1>Avaliações</h1>
            <Review>
            <img src="https://avatars.githubusercontent.com/u/69023532?s=460&u=154a9f3856a5d74eb1ec66f6665f44f1a0460b4e&v=4" alt="a"></img>
              <div>
                <h2>Pedro Souza</h2>
                <p>Avaliação lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </p>
              </div>
            </Review>
            <Review>
            <img src="https://avatars.githubusercontent.com/u/69023532?s=460&u=154a9f3856a5d74eb1ec66f6665f44f1a0460b4e&v=4" alt="a"></img>
              <div>
                <h2>Pedro Souza</h2>
                <p>Avaliação lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </p>
              </div>
            </Review>
            <Review>
            <img src="https://avatars.githubusercontent.com/u/69023532?s=460&u=154a9f3856a5d74eb1ec66f6665f44f1a0460b4e&v=4" alt="a"></img>
              <div>
                <h2>Pedro Souza</h2>
                <p>Avaliação lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </p>
              </div>
            </Review>
            <Review>
              <img src="https://avatars.githubusercontent.com/u/69023532?s=460&u=154a9f3856a5d74eb1ec66f6665f44f1a0460b4e&v=4" alt="a"></img>
              <div>
                <h2>Pedro Souza</h2>
                <p>Avaliação lorem ipsum lorem</p>
              </div>
            </Review>
            <AddReview>
              <h1> Avalie o produto! </h1>
              <form>
                <textarea/>
                <button type="submit">Enviar avaliação</button>
              </form>
              

            </AddReview>
          </Reviews>
        </ProductBox>
        
        </ProductContainer>
        <Footer/>
        
    </>
  )
}

export default Product;