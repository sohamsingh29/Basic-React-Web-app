import React from "react";
import { Main } from "./Home";
import SEO from "../components/seo";
import ScrollToTopOnMount from "../components/scrollToTop";
import {
  Primary,
  PrimaryImage,
  PrimaryText,
  Secondary,
  DivLg,
} from "../components/PageComponents";
import { Div } from "./gallery";
import { Heading, Members, M } from "./about";
import styled from "styled-components";
import Card from "../components/card";
import AniLine from "../components/aniLine";

const Member = styled(Members)`
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Data = [
  { src: require("../images/about/about.jpg"), gallery: true },
  { src: require("../images/about/about.jpg"), gallery: true },
  { src: require("../images/about/about.jpg"), gallery: true },
  { src: require("../images/about/about.jpg"), gallery: true },
  { src: require("../images/about/about.jpg"), gallery: true },
  { src: require("../images/about/about.jpg"), gallery: true },
];

const Experience = () => {
  return (
    <Main>
      <SEO title="Works" />
      <ScrollToTopOnMount />
      <Primary>
        <PrimaryImage src={require("../images/about/about.jpg")} />
        <PrimaryText>Works</PrimaryText>
      </Primary>
      <Secondary>
        <DivLg>
          <Heading>Works In Dubai</Heading>
          <AniLine />
          <Member>
            <M>works</M>
            <M>some more works.</M>
            <M>more works.</M>
            <M>Many other projects.</M>
          </Member>
          <Heading>Photos</Heading>
          <AniLine />
          <Div>
            {Data.map((item) => (
              <Card {...item} />
            ))}
          </Div>
        </DivLg>
      </Secondary>
    </Main>
  );
};

export default Experience;
