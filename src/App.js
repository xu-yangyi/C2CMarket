import React from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header/index'
import Home from './pages/home/index'
import {BrowserRouter,Route} from "react-router-dom";
import Login from "./pages/login";


function App() {
  return (
            <BrowserRouter>
                <GlobalStyle/>
                <Header />
                <Route path={'/'} exact component={Home}/>
                <Route path={'/login'} exact component={Login}/>
            </BrowserRouter>
  );
}

export default App;
