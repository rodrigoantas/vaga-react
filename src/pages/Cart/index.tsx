import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api';

import {CartBox, CartContainer} from './styles'
import { useAuth } from '../../contexts/AuthContext';

interface ICartItem {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const {user} = useAuth();

  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  useEffect(()=> {
    async function loadCart() {
      const {data} = await api.get(`/cart/${user.id}`)
      // console.log(data.products)
      setCartItems(data.products);
    }

    loadCart();
  },[user])

  const handleUpdateCart = useCallback( async ()=> {
    const findProductIndex = cartItems.findIndex(product => product.id === 15);
    console.log(findProductIndex)


      const newArray = [...cartItems];
      newArray[findProductIndex].quantity += 1

      setCartItems(newArray);
    return
  },[cartItems])

  console.log(cartItems);



  return (
    <>
      <Header/>
      <CartContainer>
        <CartBox>
        { cartItems.length && cartItems.map(product => {
          return (
            <>
            <h1>{product.title}</h1>
            <p>{product.quantity}</p>
            </>
          )
        })}
        <button onClick={handleUpdateCart}>Teste</button>
        </CartBox>
      </CartContainer>
      <Footer/>

    </>
  )
}

export default Cart