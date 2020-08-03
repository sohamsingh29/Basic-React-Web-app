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
import Section from "../components/Section";
import ScrollToTopOnMount from "../components/scrollToTop";

const Text = styled.div`
  font-size: 30px;
  margin: 40px;
  text-align: center;
`;

const AllServices = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;

const Data = [
  {
    direction: "left",
    src: require("../images/services/1.jpg"),
    heading: "service 0",
    summary: "this is the summary of the service in the title above.",
  },
  {
    direction: "right",
    src: require("../images/services/design.jpg"),
    heading: "service 1",
    summary: "this is the summary of the service in the title above.",
  },
  {
    direction: "left",
    src: require("../images/services/ceiling.jpg"),
    heading: "service 2",
    summary: "this is the summary of the service in the title above.",
  },
  {
    direction: "right",
    src: require("../images/services/sign.jpg"),
    heading: "service 3",
    summary: "this is the summary of the service in the title above.",
  },
  {
    direction: "left",
    src: require("../images/services/manage.jpg"),
    heading: "service 4",
    summary: "this is the summary of the service in the title above.",
    line: false,
  },
];

const Services = () => (
  <Main>
    <ScrollToTopOnMount />
    <SEO title="Our Services" />
    <Primary>
      <PrimaryImage src={require("../images/services/services.jpg")} />
      <PrimaryText>Our Services</PrimaryText>
    </Primary>
    <Secondary>
      <DivLg>
        <Text>awesome tag line</Text>
        <AllServices>
          {Data.map((item) => (
            <Section {...item} />
          ))}
        </AllServices>
        <Text>And We are not limited to these...</Text>
      </DivLg>
    </Secondary>
  </Main>
);

export default Services;
