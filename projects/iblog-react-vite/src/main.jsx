import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './error-page.jsx';
import Signup from './routes/Signup.jsx';
import Forgotpass from './routes/Forgotpass.jsx';
import Getcode from './routes/Getcode.jsx';
import Yourcode from './routes/Yourcode.jsx';
import SignupNewuser from './routes/SignupNewuser.jsx';
import Confirmed from './routes/Confirmed.jsx';
import Userprofile from './routes/Userprofile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },

  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/forgotpass",
    element: <Forgotpass />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/forgotpass/getcode",
    element: <Getcode />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/forgotpass/getcode/yourcode",
    element: <Yourcode />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/newuser",
    element: <SignupNewuser />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/signup/newuser/confirmed",
    element: <Confirmed />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/signin/user`,
    element: <Confirmed />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/contact/user`,
    element: <Userprofile />,
    errorElement: <ErrorPage />,
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
          <RouterProvider router={router} />
  // </React.StrictMode>,
)
