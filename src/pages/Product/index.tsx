import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import {ProductContainer} from './styles';

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

  return (
    <ProductContainer>{product.title}</ProductContainer>
  )
}

export default Product;