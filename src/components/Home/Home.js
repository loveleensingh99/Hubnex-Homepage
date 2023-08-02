import React from "react";
import Navbar from "../Navbar";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";
import Header from "./Header";
import ProjectHubnex from "./ProjectHubnex";
import Section1 from "./Section1";
import Services from "./Services";

export default function Home() {
  return (
    <>
      
      <Header />
      <Section1 />
      <Services />
      <ProjectHubnex />
      <ConnectWithUs />
    
    </>
  );
}
