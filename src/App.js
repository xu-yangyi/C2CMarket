import React from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header/index'
import Home from './pages/home/index'
import Login from "./pages/login";
import Register from "./pages/register";

import {BrowserRouter,Route} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import {Provider} from "react-redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));
function App() {
  return (
            <Provider store={store}>
                <BrowserRouter>
                    <GlobalStyle/>
                    <Header />
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/login'} exact component={Login}/>
                    <Route path={'/register'} exact component={Register}/>
                </BrowserRouter>
            </Provider>

  );
}

export default App;
