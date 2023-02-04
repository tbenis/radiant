import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home"
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
   <Home/>

   
  );
}

export default App;
