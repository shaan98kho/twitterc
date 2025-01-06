import './App.scss';
import React from "react";
import Tweets from "./components/Tweets/Tweets";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
