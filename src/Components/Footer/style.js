import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.03);
  margin-top: 42px;
  padding-top: 50px;
  padding-bottom: 32px;
`;

export const Content = styled.div`
  width: 100%;
  width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Col = styled.div`
    /* display: ${({flex}) => !flex ? "flex" : ""}; */
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 126.69%;
  color: #000000;
`;

export const Items = styled.div`
    margin-right: 50px;
`;

export const Item = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  color: #414141;
  padding-top: 10px;
  cursor: pointer;
  transition:0.4s ease;
  &:hover {
    color:red;
  }
`;

export const Logo = styled.img`

`

export const Address = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 126.69%;
    text-align: right;
    color: #414141;
    padding-top: 10px;
`