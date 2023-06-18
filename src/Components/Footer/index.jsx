import React from "react";
import {
  Col,
  Container,
  Content,
  Title,
  Row,
  Items,
  Item,
  Logo,
  Address,
} from "./style";

import LogoFooter from "../../Assets/Images/footerLogo.svg";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Title>НАВИГАЦИЯ</Title>
        <Row>
          <Col>
            <Items>
              <Item>Кухни </Item>
              <Item>Спальни</Item>
              <Item>Гостинные</Item>
            </Items>
            <Items>
              <Item>Прихожие </Item>
              <Item>Офисная мебель</Item>
              <Item>Детская</Item>
            </Items>
            <Items>
              <Item>Шкафы</Item>
              <Item>Матрасы</Item>
              <Item>Мягкая мебель</Item>
            </Items>
          </Col>
          <Col >
            <div style={{textAlign:"right"}}>
              <Logo src={LogoFooter} />
              <Address>г. Анапа, Анапское шоссе, 30 Ж/К Черное море</Address>
            </div>
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

export default Footer;
