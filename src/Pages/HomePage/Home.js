import React from "react";
import AppDownload from "./AppDownload/AppDownload";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Support from "./Support/Support";
import Works from "./Works/Works";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Support></Support>
      <Works></Works>
      <Services></Services>
      <AppDownload></AppDownload>
    </>
  );
};

export default Home;
