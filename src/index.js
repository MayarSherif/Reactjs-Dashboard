import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './redux/store'
import "remixicon/fonts/remixicon.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './components/context/userContext';
import { CarProvider } from './components/context/carContext';
import { ListProvider } from './components/context/wishListContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CarProvider>
          <ListProvider>
            <App />
          </ListProvider>
        </CarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
