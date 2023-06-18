import styled from "styled-components";
import {ReactComponent as heart} from "../../Assets/Images/wishlist-icon.svg"

export const Icon = styled(heart)`

`

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Stars = styled.div`
  display: flex;
`;

export const Star = styled.img`
  margin-right: 3px;
  cursor: pointer;
`;

export const Title = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #414141;
`;

export const Name = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #686868;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
`;

Details.Price = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #414141;
  margin-top: 10px;
`;

Details.Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  padding: 12px 50px;
  margin-left: 31px;
  border: none;
  outline: none;
  background: #245462;
  cursor: pointer;
  margin-right: 20px;
`;

Details.Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
  padding-left: 5px;
`;

export const Comment = styled.div`
  padding-top: 20px;
`;

Comment.Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
`;

Comment.Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #686868;
  padding-top: 10px;
`;

export const Sizes = styled.div`
  margin-top: 20px;
`;

Sizes.Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #414141;
`;

Sizes.Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #414141;
  padding-top: 17px;
`;

export const Nav = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #414141;
  padding-top: 90px;
  margin-bottom: 50px;
`

export const Menu = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #969696;
`