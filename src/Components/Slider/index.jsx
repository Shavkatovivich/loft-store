import React from "react";
import { Container, Content, Img, Info, Title } from "./style";
import { Carousel } from "antd";

// import images
import hero from "../../Assets/Images/swiper-img1.png";
import hero2 from "../../Assets/Images/swiper-img-2.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Slider = () => {
  return (
    <Container>
      <Content>
        <Carousel autoplay dots={false}>
          <div>
            <Img src={hero} />
            <Info>
              <Info.Title>loft мебель</Info.Title>
              <Info.Text>Современная и удобная мебель в Анапе</Info.Text>
              <Info.Btn>СМОТРЕТЬ КАТАЛОГ</Info.Btn>

            </Info>


          </div>
          <div>
            <Img src={hero} />
            <Info>
              <Info.Title>loft мебель</Info.Title>
              <Info.Text>Современная и удобная мебель в Анапе</Info.Text>
              <Info.Btn>СМОТРЕТЬ КАТАЛОГ</Info.Btn>

            </Info>
          </div>

        </Carousel>
      </Content>
    </Container>
  );
};

export default Slider;
