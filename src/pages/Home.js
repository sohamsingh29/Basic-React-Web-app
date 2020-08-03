import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import gsap from "gsap";

import SEO from "../components/seo";
import Logo from "../images/LOGO.png";
import Card from "../components/card";
import AniLine from "../components/aniLine";
import PrimaryButton from "../components/primaryButton";
import ScrollToTopOnMount from "../components/scrollToTop";

export const Main = styled.div`
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
`;

const Primary = styled.div`
  z-index: 1;
  line-height: 0;
  display: flex;
  background: linear-gradient(to right, #ffe8df, #ffffff20);
  position: relative;
  height: 70%;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => theme.media} {
  }
`;
const SecondHeading = styled.div`
  font-size: 30px;
  margin: 20px;
`;
const MainText = styled.div`
  z-index: 2;
  line-height: 50px;
  text-align: center;
  padding: 1rem;
  position: relative;
  width: 60%;
  color: ${({ theme }) => theme.colors.text.heading};
  ${({ theme }) => theme.media} {
    position: absolute;
    line-height: 25px;
    width: 100%;
    height: 100%;
  }
`;
const Heading = styled.div`
  margin: 0px 0px 30px 0;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text.heading};
  ${({ theme }) => theme.media} {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
const Image = styled.img`
  width: 50%;
  margin: 0;
  object-fit: cover;
  position: relative;

  z-index: 0;
  height: 500px;
  ${({ theme }) => theme.media} {
    height: 400px;
    width: 100%;
  }
`;

const Secondary = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Tertiary = styled.div`
  position: relative;
  width: 100%;
`;

const TertiaryImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
  margin: 0;

  position: relative;
`;
const TerText = styled.div`
  z-index: 2;
  height: 100%;
  flex-direction: column;
  display: flex;
  background: #fff5;
  text-align: center;
  line-height: 2rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.heading};
  font-size: 26px;
  width: 100%;
  position: absolute;

  ${({ theme }) => theme.media} {
    line-height: 1.3rem;
    font-size: 18px;
  }
`;

const TextDv = styled.div`
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 30px;
  ${({ theme }) => theme.media} {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const data = [
  {
    src: require("../images/services/design.jpg"),
    text: "some services",
  },
  {
    src: require("../images/services/ceiling.jpg"),
    text: "some services",
  },
  {
    src: require("../images/services/sign.jpg"),
    text: "some services",
  },
  {
    src: require("../images/services/manage.jpg"),
    text: "some services",
  },
  {
    src: require("../images/services/1.jpg"),
    text: "some services",
  },
];

const HomePage = () => {
  const primaryfade = useRef(null);
  const primaryImg = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      primaryfade.current,
      { yPercent: 20 },
      { yPercent: 0, duration: 1 }
    );
    gsap.fromTo(
      primaryImg.current,
      { yPercent: 20 },
      { yPercent: 0, duration: 1 }
    );
  }, []);
  return (
    <Main>
      <ScrollToTopOnMount />
      <SEO title="Home" />
      <Primary>
        <MainText ref={primaryfade}>
          <img style={{ width: 200, margin: 0 }} src={Logo} alt="Logo" />
          <Heading>Welcome To Brand name</Heading>
          <TextDv>awesome tag line</TextDv>
        </MainText>
        <Image
          ref={primaryImg}
          src={require("../images/index/home1.jpg")}
          alt="Home Page pic"
        />
      </Primary>
      <Tertiary style={{ height: 300 }}>
        <TerText>
          <div style={{ width: "80%" }}>awesome tag line 2</div>
        </TerText>
      </Tertiary>
      <Secondary>
        <SecondHeading>Our Services</SecondHeading>
        <AniLine />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            opacity: 1,
          }}
        >
          {data.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </Secondary>

      <Tertiary>
        <TertiaryImg src={require("../images/index/tertiary.jpg")} />
        <TerText style={{ position: "absolute", top: 0, height: "100%" }}>
          <div style={{ width: "80%" }}>Awesome tag line 3</div>
          <PrimaryButton to="contact">Contact Us</PrimaryButton>
        </TerText>
      </Tertiary>
    </Main>
  );
};

export default HomePage;
