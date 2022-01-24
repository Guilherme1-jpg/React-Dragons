import styled from "styled-components";

export const FooterArea = styled.footer`
  position: relative;
  display: flex;
  justify-content: flex-end;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;

  p {
    font-size: 32px;
    margin-top: 300px;
    display: flex;
    flex: 1;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 800px) {
    img {
      width: 100px;
      height: 100px;
    }
    p {
      margin: 0;
      flex-wrap: wrap;
      font-size: 16px;
    }
  }
`;
