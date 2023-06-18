import styled from "styled-components";

export const Container = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export const Img = styled.img`
  height: 450px;
  width: 100%;
  position: relative;
`;

export const Info = styled.div`
  position: absolute;
  top: 20%;
  padding-left: 80px;
`;

Info.Title = styled.h1`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 105.3%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #3c3c3c;
  width: 216px;
  height: 116px;
`;

Info.Text = styled.p`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140.8%;
  letter-spacing: 0.02em;
  color: #343434;
  padding-bottom: 20px;
`;

Info.Btn = styled.button`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 140.8%;
  letter-spacing: 0.04em;
  color: #414141;
  width: 163px;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border:none;
  cursor:pointer;
  transition: 0.5s ease;
  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  &:active {
    transform:scale(0.8)
  }
`;
