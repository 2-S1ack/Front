import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./components/ui/GlobalStyle";
import Store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <Provider store={Store}>
          <App />
          <GlobalStyle />
     </Provider>
);
