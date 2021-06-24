import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Content, Infos, Price, SellingPrice, ProductTitle } from './styles';

function ProductList(props) {
  
  function price() {
    if (props.price.toString().length > 2) {
      return `${props.price.toString().substring(0, props.price.toString().length - 2)},${props.price.toString().substring(props.price.toString().length - 2, props.price.toString().length)}`;
    } else {
      return `0,${props.price.toString().substring(props.price.toString().length - 2, props.price.toString().length)}`;
    }
  }

  function sellingPrice() {
    if (props.sellingPrice.toString().length > 2) {
      return `${props.sellingPrice.toString().substring(0, props.sellingPrice.toString().length - 2)},${props.sellingPrice.toString().substring(props.sellingPrice.toString().length - 2, props.sellingPrice.toString().length)}`;
    } else {
      return `0,${props.sellingPrice.toString().substring(props.sellingPrice.toString().length - 2, props.sellingPrice.toString().length)}`;
    }
  }

  return (
    <Container>
      <Content>
        <img src={props.image} alt="" />

        <Infos>
          <ProductTitle>{props.name.toUpperCase()}</ProductTitle>

          <Price>R$ {price()}</Price>
          <SellingPrice>R$ {sellingPrice()}</SellingPrice>

          <button type="button" onClick={() => props.onAdd(props.id)}><FiShoppingCart /> Adicionar</button>
        </Infos>
      </Content>
    </Container>
  );
};

export default ProductList;
