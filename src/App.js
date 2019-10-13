import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import "./styles/index.scss";
import { BASE_URL } from "./links/links"
import { Home } from "./components/home"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <Switch>
          <Route path='/' component={Home}>            
          </Route>
        </Switch>        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
