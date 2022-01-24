import styled from "styled-components";

export const Abbr = styled.div`
  transform: translate(30%, 30%);
  text-align: center;
  border: 2px solid #444;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 42px;
  cursor: default;

  &:before {
    content: "?";
    font-family: sans-serif;
    font-weight: normal;
    font-size: 30px;
    color: #444;
  }

  &:hover p {
    margin-top: 50px;
    display: flex;
    transform-origin: 50% 50%;
    -webkit-animation: fadeIn 0.3s ease;
    animation: fadeIn 0.3s ease;
  }

  p {
    display: none;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    background-color: #ffffff;
    padding: 12px 16px;
    width: 178px;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 5%);
    border-radius: 3px;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.1);
    color: #37393d;
    font-size: 12px;
    text-decoration: none;
    line-height: 18px;
    z-index: 99;
  }

  p,
  a {
    color: #067df7;
  }

  &:hover p,
  a {
    text-decoration: none;
  }

  p:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #ffffff;
    top: -9px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p:after {
    width: 10px;
    height: 40px;
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;
