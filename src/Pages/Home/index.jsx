import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { Container, Content, Row, Title } from "./style";
import Card from "../../Components/Card";
import axios from "axios";
import Footer from "../../Components/Footer";
import { useActive } from "../../Context/Active";

const Home = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false)

  const [active, setActive] = useActive()

  useEffect(() => {
    axios
      .get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        setData(res?.data)
        setActive(!active)
      }) 
      .catch((error) => console.log(error));
  },[render]);


  return (
    <div>
      <Container>
        <Content>
          <Slider />
          <Title>Хиты продаж</Title>
          <Row>
            {data.map((item) => (
              <Card key={item.id} value={item} setRender={setRender} />
            ))}
          </Row>
        </Content>
        <Footer/>
      </Container>
    </div>
  );
};

export default Home;
