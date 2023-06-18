import styled from "styled-components";

import { ReactComponent as heart } from "../../Assets/Svg/heart.svg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 273px;
  background: #fff;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.09);
  margin: 15px;
  padding: 20px 15px;
`;

Container.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-top: 38px;
  cursor: pointer;
`;
Container.Body = styled.div`
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SubTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
  padding-top: 15px;
`;

export const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  padding-top: 6px;
  color: #414141;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-top: 9px;
  color: #414141;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

Footer.Col = styled.div``;

Footer.Text = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #c4c4c4;
  margin-right: 15px;
`;

Footer.Size = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #414141;
  margin-top: 8px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.6s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  background: #245462;
  color: #ffffff;
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  width: 100%;
  height: 40px;
  cursor: pointer;
  transition: 0.5s ease;
  border: none;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Heart = styled.div`
  position: absolute;
  right: 15px;
  top: 21px;
`;

Heart.Black = styled(heart)`
  cursor: pointer;
`;
