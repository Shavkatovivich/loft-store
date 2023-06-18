import React, { useEffect, useState } from "react";
import { Container, Content, Img, Row, Menu } from "./Style";
import Footer from "../../Components/Footer";
import axios from "axios";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import empty from "../../Assets/Images/empty.avif"
import { useActive } from "../../Context/Active";

const Favourite = () => {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useActive()

  useEffect(() => {
    axios
      .get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        let d = res.data.filter((res) => res.active == true);
        setData(d);
        setActive(!active)
      })
      .catch((error) => console.log(error));
  }, [render]);

  return (
    <Container>
      <Content>

      <Menu>
          <span><Link className="link" to={"/"}>Главная</Link>/ Гостинные / Мягкая мебель / Диваны</span>
        </Menu>

       <Row>
       {
            data.length > 0 ?       
            data.map((item) => (
                <Card setRender={setRender} key={item.id} value={item} />
              ))
            :
            <div style={{display:"block", textAlign:"center", width:"100%"}}>
                <img src={empty} alt="" />
            </div>
        }

       </Row>
        <Row>
          {data.map((item) => (
            <Card setRender={setRender} key={item.id} value={item} />
          ))}
        </Row>

        <Footer />
      </Content>
    </Container>
  );
};

export default Favourite;
