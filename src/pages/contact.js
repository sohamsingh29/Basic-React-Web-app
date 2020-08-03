import React from "react";

import SEO from "../components/seo";
import { Main } from "./Home";
import {
  DivLg,
  Primary,
  PrimaryImage,
  PrimaryText,
  Secondary,
} from "../components/PageComponents";
import ContactForm from "../components/contactForm";
import styled from "styled-components";
import ScrollToTopOnMount from "../components/scrollToTop";

export const MainText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  text-align: center;
  margin: 2rem 0px;
  line-height: 2rem;

  ${({ theme }) => theme.media} {
    font-size: 18px;
  }
`;
const SecondaryText = styled.div`
  font-size: 26px;
  margin: 20px 0;
  ${({ theme }) => theme.media} {
    font-size: 18px;
  }
`;

const Contact = () => (
  <Main>
    <ScrollToTopOnMount />
    <SEO title="Contact Us" />
    <Primary>
      <PrimaryImage src={require("../images/contact/contact.jpg")} />
      <PrimaryText>Contact Us</PrimaryText>
    </Primary>
    <Secondary>
      <DivLg>
        <MainText>
          Please contact us for general questions, or to speak with someone
          about more information.
        </MainText>
        <ContactForm />
        <SecondaryText>We look forward to hear from You!</SecondaryText>
      </DivLg>
    </Secondary>
  </Main>
);

export default Contact;
