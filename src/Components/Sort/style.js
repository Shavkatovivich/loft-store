import styled from "styled-components";

export const Container = styled.div`
  height: 126px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 23px 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background: #245462;
    border-radius: 3px;
    color: white;
  }
`;

Item.Img = styled.img``;

Item.Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  padding-left: 10px;

  &:hover {
    color: white;
  }
`;

Item.Sale = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #d74444;
`;
