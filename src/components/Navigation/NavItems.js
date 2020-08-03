import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const itemList = [
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "About",
    to: false,
    list: [
      { text: "Who we are", to: "about" },
      { text: "Works", to: "experience" },
    ],
  },
  {
    text: "Services",
    to: "/services",
  },
  {
    text: "Gallery",
    to: "/gallery",
  },
];

const Item = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 300ms;
  color: ${({ theme }) => theme.colors.text.subHeading};
  @media only screen and (min-width: 600px) {
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    &:hover {
      background: #0002;
    }
    &:active {
      background: #0006;
    }
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
    padding: 1.08rem 5px;
    text-align: center;
    &:active {
      background: #0006;
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  left: 0;
  box-shadow: 1px 1px 5px #0005;
  width: 200px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  flex-direction: column;
  z-index: 100;
  ${({ theme }) => theme.media} {
    bottom: 3rem;
  }
`;
const DItem = styled(Item)`
  display: block;
`;

const NavItems = () => {
  const [d, setD] = useState(false);
  return itemList.map(({ text, to, list }) =>
    list ? (
      <Item
        onMouseEnter={() => setD(true)}
        onMouseLeave={() => setD(false)}
        onClick={() => setD(!d)}
        to={to}
      >
        {text}
        {list && d && (
          <DropDown>
            {list.map(({ text, to }) => (
              <DItem onClick={() => setD(false)} to={to}>
                {text}
              </DItem>
            ))}
          </DropDown>
        )}
      </Item>
    ) : (
      <Item to={to}>{text}</Item>
    )
  );
};

export default NavItems;
