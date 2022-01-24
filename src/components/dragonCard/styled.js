import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  margin-left: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: block;
  margin-left: 80px;
`;

export const CardArea = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
