import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Details,
  Img,
  Name,
  Row,
  Star,
  Stars,
  Title,
  Comment,
  Sizes,
  Nav,
  Menu,
  Icon,
} from "./style";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import star from "../../Assets/Images/star.svg";
import heart from "../../Assets/Images/heart.png";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer"

import { useActive } from "../../Context/Active";

const View = () => {
  const [active, setActive] = useActive()
  const [data, setData] = useState({});
  const [product, setProduct] = useState([]);
  const [render, setRender] = useState()


  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://6427fbdc46fd35eb7c492488.mockapi.io/student/${params?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setData({ ...res.data })
        // setActive(!active)
      })
      .catch((error) => console.log(error));
  }, [params?.id]);


  useEffect(() => {
    axios
      .get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setProduct(res?.data)
        setActive(!active)
      })
      .catch((error) => console.log(error));
  }, [render]);

  return (
    <>
      <Container>
        <Menu>
          <span><Link className="link" to={"/"}>Главная</Link>/ Гостинные / Мягкая мебель / Диваны</span>
        </Menu>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Img src={data?.url} />
          </Col>
          <Col>
            <Stars>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
            </Stars>

            <Title>{data?.name}</Title>
            <Name>{data?.title}</Name>

            <Details>
              <Details.Price>{data?.price}₽</Details.Price>
              <Details.Button>Купить</Details.Button>
              <Icon src={heart} className={data?.active ? "favourite" : ""}/>
              <Details.Text>Добавить в желаемое</Details.Text>
            </Details>

            <Sizes>
              <Sizes.Title>Размер (Д × Ш × В)</Sizes.Title>
              <Sizes.Text>
                {data?.width} CM × {data?.depth} CM × {data?.height}
              </Sizes.Text>
            </Sizes>

            <Comment>
              <Comment.Title>Описание</Comment.Title>
              <Comment.Text>
                Лаконичные линии и простые формы, безупречный стиль и
                индивидуальность – все это диван «Динс». Сдержанный
                скандинавский дизайн украсит любую современную обстановку.
                Элегантность, комфорт и функциональность, собранные воедино –
                «Динс» просто создан для размеренного отдыха в кругу семьи или
                компании друзей!
              </Comment.Text>
            </Comment>
          </Col>
        </Row>

        <Nav>Хиты продаж</Nav>
          <Row>
            {product.map((item) => (
              <Card setRender={setRender} key={item.id} value={item} />
            ))}
          </Row>
      </Container>

      <Footer />
    </>
  );
};

export default View;
