import styled from 'styled-components';

/* export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #D2D8E3;
  padding: 70px 0;
`; */

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  max-width: 490px;
  width: 100%;
  border-radius: 0 10px 10px 0;
  border-left: 1px solid #CDCECD;

  @media (max-width: 1220px) {
    max-width: 440px;
  }

  @media (max-width: 1120px) {
    max-width: 420px;
  }

  @media (max-width: 1000px) {
    max-width: 45%;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    border-top: 1px solid #CDCECD;
    border-left: none;
    border-radius: 0 0 10px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;
  border-bottom: 1px solid #CDCECD;

  h2 {
    font-size: 21px;
    color: #000000;
  }
`;

export const ProductArea = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  padding: 20px 20px 0;
  border-bottom: 1px solid #CDCECD;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    font-weight: 600;
    color: #A5A5A5;
    background: #DFDEDE;
    border-radius: 40px;

    margin-bottom: 20px;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

  padding: 20px;
  border-bottom: 1px solid #CDCECD;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > span {
      font-size: 21px;
      font-weight: 800;
      color: #000000;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: 92%;
    font-weight: 600;
    color: #3D7820;
    background: #D3FEAF;
    border-radius: 40px;

    margin-bottom: 20px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  width: 100%;

  button {
    background: #4972EA;
    color: #FFFFFF;
    font-size: 21px;
    font-weight: 800;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    border: none;

    transition: 300ms ease;

    &:hover {
      background: #4066D4;
    }
  }
`;
