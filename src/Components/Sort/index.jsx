import React from 'react'
import { Container, Content, Item, Row } from './style'

import kitchen from "../../Assets/Images/kitchen-icon.png"
import bedroom from "../../Assets/Images/bedroom-icon.png"
import livingroom from "../../Assets/Images/livingroom-icon.png"
import closet from "../../Assets/Images/closet-icon.png"
import office from "../../Assets/Images/office-icon.png"
import childrenrooms from "../../Assets/Images/childrensroom-icon.png"
import etc from "../../Assets/Images/etc.png"

const Sort = () => {
  return (
    <Container>
      <Content>
        <Row>
        <Item>
          <Item.Img src={kitchen}/>
          <Item.Text>Кухни</Item.Text>
        </Item>
        <Item>
          <Item.Img src={bedroom}/>
          <Item.Text>Спальни</Item.Text>
        </Item>
        <Item>
          <Item.Img src={livingroom}/>
          <Item.Text>Гостинные</Item.Text>
        </Item>
        <Item>
          <Item.Img src={closet}/>
          <Item.Text>Прихожие</Item.Text>
        </Item>
        <Item>
          <Item.Img src={office}/>
          <Item.Text>Офисная мебель</Item.Text>
        </Item>
        <Item>
          <Item.Img src={childrenrooms}/>
          <Item.Text>Детская</Item.Text>
        </Item>
        <Item>
          <Item.Sale>Акция</Item.Sale>
        </Item>
        <Item>
          <Item.Img src={etc}/>
        </Item>
        </Row>
      </Content>
    </Container>
  )
}

export default Sort;