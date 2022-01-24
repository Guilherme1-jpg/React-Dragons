import React from "react";
import astro from "../../assets/images/astro.png";
import * as C from "./styled";

export default function Footer() {
  return (
    <C.FooterArea>
      <p>
        Desenvolvido com ❤
        <a href="https://www.linkedin.com/in/guilherme-henrique-6b3389136/">
          por Guilherme Henrique
        </a>
      </p>
      <img src={astro} />
    </C.FooterArea>
  );
}
