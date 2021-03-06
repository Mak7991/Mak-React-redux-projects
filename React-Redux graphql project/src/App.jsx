import React from "react";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//components
import AppRouter from "components/AppRouter";

//styles
import "styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
