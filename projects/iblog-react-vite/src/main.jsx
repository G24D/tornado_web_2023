import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import ErrorPage from './error-page.jsx';
import Signup from './routes/SignUp.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacts/1",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Signup />,
      },
    ],
  },
  {
    path: "login/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
          <RouterProvider router={router} />
  // </React.StrictMode>,
)
