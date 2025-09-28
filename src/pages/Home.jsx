import React from "react";
import Hero from "../components/Hero/Hero";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import InfoBlock2 from "../components/InfoBlock2/InfoBlock2";
import ChooseCar from "../components/ChooseCar/ChooseCar";

const Home = () => {
  return (
    <>
      {/* Тут позже добавим hero-секцию, поиск и т.д. */}
      <Hero />
      <InfoBlock />
      <InfoBlock2 />
      <ChooseCar />
    </>
  );
};

export default Home;
