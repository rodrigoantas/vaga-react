import React, { createContext, useCallback, useState, useContext } from 'react';

interface ICartItem {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextData {
  products: Array<ICartItem>;
  addQuantity(productId: number): void;
  removeQuantity(productId: number): void;
  removeProductToCart(product: ICartItem): void;
  addProductToCart(product: ICartItem): void;
}


const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider : React.FC = ({ children }) => {
  

  const [products, setProducts] = useState<Array<ICartItem>>(() => {
    const products = localStorage.getItem('@Ecommerce:products');

    if (products) {
      return [JSON.parse(products)];
    }

    return {} as Array<ICartItem>

  })

  const addQuantity = useCallback((productId: number)=> {
    const findProductIndex = products.findIndex(item => item.id === productId);

    const newArrayOfCartproducts = [...products];
    newArrayOfCartproducts[findProductIndex].quantity += 1
    setProducts(newArrayOfCartproducts)

    localStorage.setItem('@Ecommerce:products', JSON.stringify(products))

    return


  },[products])

  const removeQuantity = useCallback((productId: number)=> {
    const findProductIndex = products.findIndex(item => item.id === productId);

    const newArrayOfCartProducts = [...products];

    if (newArrayOfCartProducts[findProductIndex].quantity === 1) {
      newArrayOfCartProducts.splice(findProductIndex, 1)
      setProducts(newArrayOfCartProducts)
      localStorage.setItem('@Ecommerce:products', JSON.stringify(products))
      return
    }

    newArrayOfCartProducts[findProductIndex].quantity -= 1
    setProducts(newArrayOfCartProducts)
    
    localStorage.setItem('@Ecommerce:products', JSON.stringify(products))

    return


  },[products])


  const addProductToCart = useCallback((product: ICartItem)=> {
    setProducts([...products, product])
    localStorage.setItem('@Ecommerce:products', JSON.stringify(products))
    return
  }, [products])

  const removeProductToCart = useCallback((product: ICartItem)=> {

    const findProductIndex = products.findIndex(item => item.id === product.id);

    const newArrayOfCartProducts = [...products];

    newArrayOfCartProducts.splice(findProductIndex, 1)

    setProducts(newArrayOfCartProducts)

    localStorage.setItem('@Ecommerce:products', JSON.stringify(products))
    return 
  }, [products])


  return (
    <CartContext.Provider
      value={{ products, addQuantity, removeProductToCart, addProductToCart, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export { CartProvider , useCart };
