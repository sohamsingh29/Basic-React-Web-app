import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems";

const Nav = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 2px #000;
  /* overflow: hidden; */
  z-index: 10;
  position: fixed;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  transition: all 300ms;
  bottom: 0;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const BottomNav = () => {
  return (
    <Nav>
      <NavItems />
    </Nav>
  );
};

export default BottomNav;
