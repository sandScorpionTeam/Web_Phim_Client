import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import Header from "./components/layout/header/header";
import Wrapper from "./components/layout/wrapper/wrapper";
import Footer from "./components/layout/footer/footer";

import "./styles/index.scss";
import { BASE_URL } from "./links/links"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <div className="container">
          <Header />
          <Wrapper />
          <Footer />
        </div>        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
