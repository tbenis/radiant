import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from "./Components/Home/Home"
import Login from "./Components/User/Login"
import Profile from "./Components/User/Profile"
import Signup from "./Components/User/Signup"
import NewPost from "./Components/Post/NewPost"
import Post from "./Components/Post/Post"
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/create-post",
    element: <NewPost />,
  },
  {
    path: "/postid",
    element: <Home />,
  },
  {
    path: "/userid",
    element: <Profile />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
