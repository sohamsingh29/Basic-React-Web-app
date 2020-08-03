import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Viewer from "react-viewer";
const CardLayout = styled.div`
  width: 300px;
  position: relative;
  line-height: 0;
  cursor: pointer;
  margin: 2rem;
  box-shadow: 1px 1px 2px #000;
  background: #f4f6ff;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  margin-bottom: 0;
  height: 250px;
  object-fit: cover;
`;
const Text = styled.div`
  position: absolute;
  display: flex;
  line-height: 2rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  top: 0;
  height: 100%;
  background: #0009;
  color: ${({ theme }) => theme.colors.text.light};
`;
const Card = ({ text, src, gallery = false }) => {
  const [visible, setVisible] = useState(false);
  const card = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      card.current,
      { autoAlpha: 0, y: -50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <CardLayout onClick={() => setVisible(true)} ref={card}>
        <Image src={src} alt="Services" />
        {gallery ? null : (
          <Text>
            <p>{text}</p>
          </Text>
        )}
      </CardLayout>
      {gallery ? (
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          noNavbar={true}
          noToolbar={true}
          images={[{ src: src, alt: text }]}
        />
      ) : null}
    </>
  );
};

export default Card;
