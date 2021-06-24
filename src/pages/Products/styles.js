import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #D2D8E3;
  padding: 70px 10%;

  @media (max-width: 1220px) {
    padding: 70px 6%;
  }

  @media (max-width: 800px) {
    padding: 20px 3%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  background: #FFFFFF;
  width: 100%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProductsArea = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 60px;
  width: 100%;
  border-bottom: 1px solid #CDCECD;
  padding: 0 20px;

  h1 {
    font-size: 21px;
    color: #000000;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
