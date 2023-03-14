import React from "react";
import Footer from "../../sections/Footer/Footer";
import {
  Landing,
  Articles,
  Gallery,
  Features,
  Testimonials,
  TeamMembers,
  Services,
  OurSkills,
  Works,
  Events,
  Pricing,
  TopVideo,
  OurState,
  Discount,
} from "../../sections/index";

const Home = () => {
  return (
    <>
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMembers />
      <Services />
      <OurSkills />
      <Works />
      <Events />
      <Pricing />
      <TopVideo />
      <OurState />
      <Discount />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
