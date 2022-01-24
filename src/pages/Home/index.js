import React, { useEffect, useState } from "react";

import SearchDragon from "../../components/searchDragon";
import * as C from "./styled";
import ImgMediaCard from "../../components/dragonCard";

import SearchAppBar from "../../components/header";
import Footer from "../../components/footer";

const style = {
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Home = () => {
  return (
    <>
      <C.Container>
        <SearchAppBar />
        <C.SearchArea>
          <SearchDragon />
        </C.SearchArea>

        <ImgMediaCard />

        <Footer />
      </C.Container>
    </>
  );
};
