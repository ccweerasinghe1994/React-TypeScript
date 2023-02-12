import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./state";

import "./index.css";
import { RepositoriesList } from "./components/repositoriesList.component";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <h1>Search For repository</h1>
        <RepositoriesList />
      </div>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
