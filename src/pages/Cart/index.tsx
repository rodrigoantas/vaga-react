import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api';

import {CartBox, CartContainer} from './styles'

const Cart: React.FC = () => {
  return (
    <>
      <Header/>
      <CartContainer>
        <CartBox>
          a
        </CartBox>
      </CartContainer>
      <Footer/>

    </>
  )
}

export default Cart