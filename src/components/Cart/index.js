import React, { useState, useEffect } from "react";

import ProductCart from '../ProductCart';

import { useProductsCart } from '../../hooks/ProductsCartContext';

import {
  Container,
  Header,
  ProductArea,
  TotalPrice,
  ButtonArea,
} from "./styles";

function Cart() {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const { productsInTheCart, setProductsInTheCart } = useProductsCart();

  useEffect(() => {
    setProducts(productsInTheCart);

    const totalPrice = productsInTheCart.map(item => item.sellingPrice);

    if (totalPrice.length === 0) {
      setTotal(0);
    }

    if (totalPrice.length > 0) {
      const value = totalPrice.reduce((total, currentElement) => total + currentElement);

      setTotal(value);
    }

  }, [productsInTheCart]);

  function totalPrice() {
    if (total === 0) {
      return `0,00`
    } else {
      if (total.toString().length > 2) {
        return `${total.toString().substring(0, total.toString().length - 2)},${total.toString().substring(total.toString().length - 2, total.toString().length)}`;
      } else {
        return `0,${total.toString().substring(total.toString().length - 2, total.toString().length)}`;
      }
    }
  }

  function handleRemoveProduct(id) {
    const newProducts = products.filter(item => item.productUniqueId !== id);
    
    setProductsInTheCart(newProducts);
  }

  return (
    <Container>
      <Header>
        <h2>Meu carrinho</h2>
      </Header>

      <ProductArea>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCart
              id={product.productUniqueId}
              name={product.name}
              price={product.price}
              sellingPrice={product.sellingPrice}
              image={product.imageUrl}
              onRemove={(id) => handleRemoveProduct(id)}
            />
          ))
        ) : (
          <h3>Carrinho vazio</h3>
        )}
      </ProductArea>

      <TotalPrice>
        {total > 1000 && <h3>Parabéns, sua compra tem frete grátis!</h3>}
        
        <div>
          <span>Total</span>

          <span>R$ {totalPrice()}</span>
        </div>
      </TotalPrice>

      <ButtonArea>
        <button>Finalizar compra</button>
      </ButtonArea>
    </Container>
  );
}

export default Cart;
