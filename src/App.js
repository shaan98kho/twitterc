import './App.scss';
import './Theme.scss';
import React from "react";
import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Tweets from "./components/Tweets/Tweets";
import MainLayout, { loader as mainLayoutLoader } from './components/Layout/MainLayout';
import ContentLayout from './components/Layout/ContentLayout';
import Explore from './pages/Explore';

const router = createBrowserRouter(createRoutesFromElements(
              <Route element={<MainLayout />} loader={mainLayoutLoader}>
                  <Route element={<ContentLayout />}>
                    <Route path="/" element={<Tweets />} loader={()=> ({})}/>
                    <Route path="/search" element={<Explore />} loader={()=> ({})}/>
                  </Route>
              </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
