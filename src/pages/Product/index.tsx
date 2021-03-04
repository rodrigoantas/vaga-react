import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { HiShoppingCart, HiTrash } from 'react-icons/hi';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api';

import {ProductContainer, ProductBox, ProductImageBox, ProductDetailBox, Reviews, Review, ProductUpperside,AddReview, ZeroReview } from './styles';

import avatarnull from '../../assets/avatar-null.jpg';

import { useAuth } from '../../contexts/AuthContext';

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

interface IReview {
  id: number;
  productId: number;
  review: string;
  user: {
    id: number;
    photo_url: string;
    name: string; 
  }
}

const Product: React.FC = () => {

  const {user} = useAuth()
  

  const [product, setProduct ] = useState<IProduct>({} as IProduct)
  const [reviews, setReviews ] = useState<IReview[]>([])
  const [review, setReview ] = useState('')

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
      const {data} = await api.get(`/reviews/`,)

      const reviewsOfThatProduct = data.filter((r: IReview) => r.productId === Number(params.product))

      setReviews(reviewsOfThatProduct);
    }
    loadReviews();
  }, [params.product])



  const handleReviewSubmit = useCallback( async (e:any) => {
    e.preventDefault();

    try {
       const newReview = await api.post(`/reviews/`, {
        productId: Number(params.product),
        review: review,
        user: {
          email: user.email,
          photo_url: user.photo_url,
          id: user.id,
          name: user.name
        }
       })

       setReviews([...reviews, newReview.data])

    } catch (err) {

      console.log(err)

    }
  }, [params.product, review, reviews, user.email, user.id, user.name, user.photo_url])

  const handleDeleteReview = useCallback( async (id: number)=> {
    await api.delete(`reviews/${id}`)

    setReviews(reviews.filter(review => review.id !== id))

  },[reviews])



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
            {reviews && reviews.length > 0 ? reviews.map(review => {
              return (
                 <Review key={review.id}>
                  <img src={review.user.photo_url ? review.user.photo_url : avatarnull} alt="a"/>
                  <div>
                    <h2>{review.user.name}</h2>
                    <p>{review.review}</p>
                  </div>
                  <div>
                    {review.user.id === Number(user.id) && <button onClick={() => handleDeleteReview(review.id)}> <HiTrash size={30}/> </button>}
                  </div>
                </Review>
              )
             
            }): (
            <ZeroReview>
              <h1> Esse produto ainda não possui nenhuma avaliação.</h1>
            </ZeroReview>
            )}
            <AddReview>
              <h1> Avalie o produto! </h1>
              <form onSubmit={handleReviewSubmit}>
                <textarea onChange={(e)=> setReview(e.target.value) }/>
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