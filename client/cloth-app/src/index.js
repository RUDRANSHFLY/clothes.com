import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.js";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Loading from "./components/Loading/Loading.jsx";
import {persistor} from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react'

const app = document.getElementById("root");
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading/>}  persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
