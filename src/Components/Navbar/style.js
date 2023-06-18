import { ReactComponent as cart } from '../../Assets/Images/cart.svg'
import { ReactComponent as heart } from "../../Assets/Svg/heart.svg";
import styled from "styled-components";

export const Container = styled.div`
  height:70px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 112px;
  height: 25px;
`;

export const Items = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  padding-left: 30px;
`;



export const Form = styled.div`
  display: flex;
  align-items: center;
  max-width: 280px;
  height: 40px;
  padding: 13px 15px;
  background: #f9f9f9;
  margin-left: 40px;
`;

Form.Img = styled.img``;

Form.Input = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  border: none;
  background: none;
  outline: none;
  margin-left: 20px;
`;

export const Phone = styled.div`
    display: flex;
    align-items:center;
`

Phone.Img = styled.img`
    margin-left: 32px;
`

Phone.Item = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color:#414141;
  margin-left: 11px;
  text-decoration:none;
`
export const Delivery = styled.div`
    display: flex;
    align-items:center;
`

Delivery.Img = styled.img`
    margin-left: 32px;
`

Delivery.Item = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color:#414141;
  margin-left: 11px;
  text-decoration:none;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-left: 40px;
`

Icons.Img = styled.img`
    margin-left: 30px;
`
export const Heart = styled(heart)`
  cursor: pointer;
`;

export const Cart = styled.div`
 position: relative;`



Cart.Icon = styled(cart)`
position: absolute;
top: 2px;
    right: -1px;
`