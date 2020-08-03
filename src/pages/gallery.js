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
import styled from "styled-components";
import Card from "../components/card";
import AniLine from "../components/aniLine";
import ScrollToTopOnMount from "../components/scrollToTop";

export const Div = styled(DivLg)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Heading = styled.div`
  width: 100%;
  font-size: 26px;
  margin: 3rem 0 1.2rem 0;
  color: ${({ theme }) => theme.colors.text.accent};
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Sec = styled(Secondary)`
  flex-direction: column;
  align-items: center;
`;

const Data = [
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
  { src: require("../images/gallery/gallery.jpg"), gallery: true },
];

const Gallery = () => (
  <Main>
    <ScrollToTopOnMount />
    <SEO title="Photo Gallery" />
    <Primary>
      <PrimaryImage src={require("../images/gallery/gallery.jpg")} />
      <PrimaryText>Photo Gallery</PrimaryText>
    </Primary>
    <Sec>
      <Heading>Our Projects</Heading>
      <AniLine />
      <Div>
        {Data.map((item) => (
          <Card {...item} />
        ))}
      </Div>
    </Sec>
  </Main>
);

export default Gallery;
