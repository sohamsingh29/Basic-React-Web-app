import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.footer`
  color: ${({ theme }) => theme.colors.text.light};
`;
const Primary = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  background: #1a202c;
`;
const Secondary = styled.div`
  display: flex;
  font-size: 14px;
  background: #2d3748;
  justify-content: center;
`;
const Container = styled.div`
  width: 960px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media} {
    justify-content: space-evenly;
    flex-direction: column;
  }
`;
const Heading = styled.div`
  font-size: 20px;
  color: #0077c0;
`;
const Item = styled.div`
  display: flex;
  width: 300px;
  font-size: 12px;
`;
const ItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.light};
`;

const ContactItem = styled.a`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 12px;
`;
const MainDiv = styled.div`
  ${({ theme }) => theme.media} {
    margin: 30px 30px;
  }
`;
const Footer = () => {
  return (
    <Main>
      <Primary>
        <Container>
          <MainDiv>
            <Heading>About</Heading>
            <Item>awesome tag line</Item>
          </MainDiv>
          <MainDiv>
            <Heading>Quick Links</Heading>
            <ItemLink to="contact">Contact Us</ItemLink>
            <ItemLink to="about">About</ItemLink>
            <ItemLink to="experience">Works</ItemLink>

            <ItemLink to="gallery">Gallery</ItemLink>
            <ItemLink to="services">Services</ItemLink>
          </MainDiv>
          <MainDiv>
            <Heading>Contact Us</Heading>
            <ContactItem href="mailto:youremail@domain.com" target="blank">
              E-mail : youremail@domain.com
            </ContactItem>
            <ContactItem>company address</ContactItem>
          </MainDiv>
        </Container>
      </Primary>
      <Secondary>
        <div style={{ width: 960 }}>
          © {new Date().getFullYear()} Company name
        </div>
      </Secondary>
    </Main>
  );
};

export default Footer;
