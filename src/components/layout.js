import React from "react";
import PropTypes from "prop-types";

import Header from "./Navigation/header";
import "./layout.css";
import BottomNav from "./Navigation/bottomNav";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  margin: 79px auto 0 auto;
  background-color: white;
  ${({ theme }) => theme.media} {
    margin-top: 70px;
  }
`;
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Header siteTitle={"Company Name"} />
      <Main>{children}</Main>
      {pathname === "/" ? null : <Footer />}
      <BottomNav />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
