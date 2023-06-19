import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Welcome from "./Welcome";
import Wonderland from "./Wonderland";
import Events from "./Events";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar/Navbar";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Welcome />
      <Wonderland />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
