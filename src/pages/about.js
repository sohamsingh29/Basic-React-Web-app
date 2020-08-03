import React from "react";

import SEO from "../components/seo";
import { Main } from "./Home";
import {
  Primary,
  PrimaryImage,
  PrimaryText,
  Secondary,
  DivLg,
} from "../components/PageComponents";
import ScrollToTopOnMount from "../components/scrollToTop";
import styled from "styled-components";

const Image = styled.img`
  width: 40%;
  ${({ theme }) => theme.media} {
    width: 60%;
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 22px;
  ${({ theme }) => theme.media} {
    font-size: 16px;
  }
`;

export const Heading = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.accent};
  margin: 1rem;
  font-size: 26px;
  ${({ theme }) => theme.media} {
    font-size: 18px;
  }
`;
export const Members = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  font-size: 22px;
  ${({ theme }) => theme.media} {
    font-size: 16px;
  }
`;

export const M = styled.p`
  display: list-item;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media} {
    flex-direction: column;
  }
`;

const About = () => (
  <Main>
    <ScrollToTopOnMount />
    <SEO title="About us" />
    <Primary>
      <PrimaryImage src={require("../images/about/about.jpg")} />
      <PrimaryText>About Us</PrimaryText>
    </Primary>
    <Secondary>
      <DivLg>
        <Heading>Who We Are</Heading>
        <Text> awesome tag line</Text>
        <Heading>Managing Director</Heading>
        <Members>
          <M>Names of directors</M>
        </Members>
        <Heading>Director</Heading>
        <Members>
          <M>names of directors</M>
        </Members>
        <Heading>Accreditations</Heading>
        <ImageContainer>
          <Image src={require("../images/about/about.jpg")} alt="about" />
          <Image src={require("../images/about/about.jpg")} alt="about" />
          <Image src={require("../images/about/about.jpg")} alt="about" />
        </ImageContainer>
      </DivLg>
    </Secondary>
  </Main>
);

export default About;
