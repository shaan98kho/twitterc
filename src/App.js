import './App.scss';
import './Theme.scss';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tweets from "./components/Tweets/Tweets";
import MainLayout from './components/Layout/MainLayout';
import ContentLayout from './components/Layout/ContentLayout';



function App() {

  return (
    <BrowserRouter>
      <Routes>        
        <Route element={<MainLayout />}>
            <Route element={<ContentLayout />}>
              <Route path="/" element={<Tweets />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
