import React from 'react';

import { FooterContainer } from './styles';

const Footer: React.FC = () => {

  return (
    <FooterContainer>
      <div>
        <ul>
          <h1>Sobre o Ecommerce</h1>
          <li><a href="/">Nos conheça!</a></li>
          <li><a href="/">Investidores</a></li>
          <li><a href="/">Fale conosco</a></li>
        </ul>
        <ul>
          <h1>Devolução</h1>
          <li><a href="/">Prazo de entrega e prazo de devolução</a></li>
          <li><a href="/">Por boleto bancário</a></li>
          <li><a href="/">Por cartão de crédito</a></li>
        </ul>
      </div>
      <div>
        <p>Copyright © 2012-2021, Ecommerce!, Inc.</p>
      </div>
    </FooterContainer>
  )
}
export default Footer