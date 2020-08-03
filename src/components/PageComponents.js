import styled from "styled-components";

export const Primary = styled.div`
  width: 100%;
  position: relative;
  line-height: 0;
`;
export const PrimaryImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin: 0;
  ${({ theme }) => theme.media} {
    height: 300px;
  }
`;

export const PrimaryText = styled.div`
  width: 100%;
  top: 0%;
  line-height: 30px;
  font-size: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.light};
  height: 100%;
  background: #0003;
  text-align: center;
  position: absolute;
  ${({ theme }) => theme.media} {
    font-size: 25px;
    line-height: 20px;
  }
`;

export const Secondary = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #fff;
`;
export const DivLg = styled.div`
  width: 960px;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
`;
