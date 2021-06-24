import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;

  img {
    width: 114px;
    height: 114px;
    border: 1px solid #CDCECD;
    object-fit: cover;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  margin-left: 20px;

  div.prices {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: transparent;
    color: #FA666F;
    font-size: 14px;
    font-weight: 800;
    height: 33px;
    width: 110px;
    border: none;
    padding: 5px 0;
    border-radius: 6px;

    > svg {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }

  @media (max-width: 1120px) {
    margin-top: 0px;
  }

  @media (max-width: 900px) {
    div.prices {
      display: flex;
      flex-direction: row;

      span:first-child {
        margin-right: 6px;
      }
    }
  }
`;

export const ProductTitle = styled.h2`
  font-size: 15px;
  color: #000000;
  margin-bottom: 6px;
`;

export const Price = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #A5A5A5;
  margin-bottom: 4px;
`;

export const SellingPrice = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #000000;
`;
