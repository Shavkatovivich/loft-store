import React, { useState } from "react";
import {
  Container,
  Img,
  Title,
  Text,
  Price,
  SubTitle,
  Footer,
  Button,
  Heart,
} from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ value, setRender }) => {
  const navigate = useNavigate();


  const [data, setData] = useState(null);

  const getId = (id) => {
    axios
      .get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => putData(res.data))
      .catch((error) => console.log(error));
  };

  const putData = (d) => {
    d.active = !d.active;
    axios
      .put(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${d.id}`, d, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRender((data) => !data);
      })
      .catch((error) => console.log(error));
  };

  const addProduct = (item) => {
        
  

    let res = JSON.parse(localStorage.getItem('loft'))

    if (res) {
        console.log(res)
        
       let result = res.filter(i => i.id == item.id);
        if (result.length > 0) {
            res.map(a => {
                if (a.id == item.id) {
                    a.count = a.count + 1;
                }
                return a;
            })
            localStorage.setItem('loft', JSON.stringify(res))
        }
        else{
            item.count = 1;
            localStorage.setItem('loft', JSON.stringify([...res,item]))  
        }
    }
    else {
        item.count = 1;
        localStorage.setItem('loft', JSON.stringify([item]))
    }
}

  return (
    <Container>
      <Heart>
        <Heart.Black
          className={value?.active ? "favourite" : ""}
          onClick={() => getId(value.id)}
        />
      </Heart>
      <Container.Header onClick={() => navigate(`view/${value.id}`)}>
        <Img src={value.url} />
      </Container.Header>

      <Container.Body>
        <Title>{value.name}</Title>
        <Text>{value.title}</Text>
        <Price>{value.price}₽</Price>
        <SubTitle>Размеры</SubTitle>

        <Footer>
          <Footer.Col>
            <Footer.Text>ШИРИНА</Footer.Text>
            <Footer.Size>{value.width}СМ</Footer.Size>
          </Footer.Col>
          <Footer.Col>
            <Footer.Text>ГЛУБИНА</Footer.Text>
            <Footer.Size>{value.depeth} SM</Footer.Size>
          </Footer.Col>
          <Footer.Col>
            <Footer.Text>ВЫСОТА</Footer.Text>
            <Footer.Size>{value.height} СМ</Footer.Size>
          </Footer.Col>
        </Footer>

        <Button onClick={() => addProduct(value)}>Добавить в корзину</Button>
      </Container.Body>
    </Container>
  );
};

export default Card;
