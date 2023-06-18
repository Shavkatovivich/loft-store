import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Items,
  Logo,
  Form,
  Phone,
  Delivery,
  Icons,
  Heart,
  Cart,
} from "./style";

import { useActive } from "../../Context/Active";

import logo from "../../Assets/Images/logo.svg";
import search from "../../Assets/Images/search.svg";
import phone from "../../Assets/Images/phone.png";
import delivery from "../../Assets/Images/delivery.png";
import heart from "../../Assets/Images/heart.png";
import bag from "../../Assets/Images/bag.png";
import user from "../../Assets/Images/user.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [active, setActive] = useActive();
  const [data, setData] = useState([]);
  const [local, setLocal] = useState(false);

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("loft"));

    if (res) {
      setLocal(true);
    } else {
      setLocal(false);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        let active = res.data.filter((res) => res.active === true);
        setData(active);
      })
      .catch((error) => console.log(error));
  }, [active]);

  return (
    <Container>
      <Content>
        <Link to={"/"}>
          <Logo src={logo} alt="logo" />
        </Link>

        <NavLink to={"/"}>
          <Items>Главная</Items>
        </NavLink>
        <NavLink to={"/about"}>
          <Items>О нас</Items>
        </NavLink>
        <NavLink to={"/contact"}>
          <Items>Контакты</Items>
        </NavLink>

        <Form>
          <Form.Img src={search} />
          <Form.Input placeholde="Search" />
        </Form>

        <Phone>
          <Phone.Img src={phone} />
          <Phone.Item href="tel:8 (964) 89 99 119">
            8 (964) 89 99 119
          </Phone.Item>
        </Phone>

        <Delivery>
          <Delivery.Img src={delivery} />
          <Delivery.Item>Доставка</Delivery.Item>
        </Delivery>

        <Icons>
          <Cart>
            <Link to="/favourite">
              <Heart className={data.length > 0 ? "favourite" : ""} />
            </Link>
            <Icons.Img src={bag} />
            {local && <Cart.Icon />}
          </Cart>

          <Icons.Img src={user} />
        </Icons>
      </Content>
    </Container>
  );
};

export default Navbar;
