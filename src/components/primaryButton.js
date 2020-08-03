import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled(Link)`
  position: relative;
  z-index: 2;
  line-height: 0;
  display: flex;
  width: 160px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  font-family: inherit;
  font-weight: 500;
  color: #382b22;
  padding: 1.25em 1em;
  background: #fff0f0;
  border: 2px solid #b18597;
  ${({ theme }) => theme.media} {
    font-size: 14px;
    width: 120px;
  }
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
      transform: translate3d(0, 0, -1em);
    }
  }
`;

const PrimaryButton = ({ to, children }) => {
  return <Button to={to}>{children}</Button>;
};

export default PrimaryButton;
