import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const Nav = styled.div`
  padding: 1.45rem;
  z-index: 1000;
  position: fixed;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important;
  display: flex;
  top: 0;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 960px;
`;
const Logo = styled(Link)`
  font-size: 26px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.heading};
  text-decoration: none;
`;

const ItemList = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = ({ siteTitle }) => (
  <Nav>
    <Main>
      <Logo to="/">
        <img
          src={require("../../images/LOGO.png")}
          style={{
            width: 35,
            margin: 0,
            objectFit: "cover",
            display: "block",
          }}
          alt="Logo company"
        />
        {siteTitle}
      </Logo>
      <ItemList>
        <NavItems />
      </ItemList>
    </Main>
  </Nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
