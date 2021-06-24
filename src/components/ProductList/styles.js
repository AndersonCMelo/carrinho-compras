import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 114px;
    height: 114px;
    margin-right: 20px;
    border: 1px solid #CDCECD;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    img {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background: #4972EA;
    background: transparent;
    color: #4972EA;
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
`;

export const SellingPrice = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 4px;
`;
