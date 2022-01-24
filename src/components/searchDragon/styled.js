import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

export const ExpandSearch = styled.input`
  width: 0;
  visibility: hidden;
  transition: width 2s;
  float: left;
`;
