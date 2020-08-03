import React from "react";
import styled from "styled-components";
import AniLine from "./aniLine";

const Container = styled.div`
  display: flex;
  line-height: 0;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
  height: 400px;
  ${({ theme }) => theme.media} {
    flex-direction: column-reverse;
    margin: 0;
    justify-content: space-evenly;
  }
`;

const Text = styled.div`
  flex-direction: column;
  text-align: center;
  line-height: 20px;
  display: flex;
  ${({ theme }) => theme.media} {
    margin: 0 5%;
  }
`;
const Image = styled.img`
  object-fit: cover;
  border: 5px solid #ddd;
  width: 40%;
  border-radius: 1rem;
  margin: 10px;
  ${({ theme }) => theme.media} {
    margin: 0;
    width: 60%;
  }
`;

const Heading = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text.accent};
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  ${({ theme }) => theme.media} {
    line-height: 20px;
    font-size: 18px;
    font-weight: 500;
  }
`;
// const Summary = styled.div`
//   font-size: 16px;
// `;

const Section = ({
  direction = "left",
  heading,
  summary,
  src,
  line = true,
}) => {
  return (
    <>
      <Container direction={direction}>
        <Text>
          <Heading>{heading}</Heading>
          {/* <Summary>{summary}</Summary> */}
        </Text>
        <Image src={src} />
      </Container>
      {line ? <AniLine /> : null}
    </>
  );
};

export default Section;
