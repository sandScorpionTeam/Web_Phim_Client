import React from 'react';
import Header from "components/layout/header/header";
import Wrapper from "components/layout/wrapper/wrapper";
import Footer from "components/layout/footer/footer";

export const Home = (props) => {
  return (
    <div className="container">
      <Header />
      <Wrapper />
      <Footer />
    </div>        
  )
}