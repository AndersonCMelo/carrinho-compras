import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';

import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';

import { useProductsCart } from '../../hooks/ProductsCartContext';

import productsUpperPrice from '../../assets/json/acima-10-reais.json';

import { Container, Content, ProductsArea, Header, List } from './styles';

function Products() {
  const [products, setProducts] = useState([]);

  const { productsInTheCart, setProductsInTheCart } = useProductsCart();

  useEffect(() => {
    setProducts(productsUpperPrice.items);
  }, []);

  function handleAddProduct(id) {
    const productSelected = products.filter(item => item.productId === id);

    const productSelectedWithUniqueId = {...productSelected[0], productUniqueId: uuid()};

    setProductsInTheCart([...productsInTheCart, productSelectedWithUniqueId]);
  }

  return (
    <Container>
      <Content>
        <ProductsArea>
          <Header>
            <h1>Lista de Produtos</h1>
          </Header>

          <List>
            {products.map(product => (
              <ProductList
                id={product.productId}
                name={product.name} price={product.price}
                sellingPrice={product.sellingPrice}
                image={product.imageUrl}
                onAdd={(id) => handleAddProduct(id)}
              />
            ))}
          </List>

        </ProductsArea>

        <Cart />
      </Content>
    </Container>
  );
};

export default Products;
