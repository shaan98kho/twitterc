import './App.scss';
import React from "react";
import Tweets from "./components/Tweets/Tweets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<div>Default route</div>}/>
        <Route path="/home" element={<>
          <div>Tweets components</div>
          <Tweets />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
