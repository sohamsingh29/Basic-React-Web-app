import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Line = styled.div`
  height: 2px;
  margin: 2px;
  background: ${({ theme }) => theme.colors.text.heading};
  transition: all 300ms;
`;

const AniLine = () => {
  const lineref = useRef();
  useEffect(() => {
    gsap.to(lineref.current, {
      scrollTrigger: { trigger: lineref.current, scrub: 1 },
      width: 300,
      duration: 0.3,
    });
  }, []);
  return <Line ref={lineref} />;
};

export default AniLine;
