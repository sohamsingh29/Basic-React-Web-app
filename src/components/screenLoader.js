import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScreenLoader = () => {
  return <Loader>Loading...</Loader>;
};

export default ScreenLoader;
