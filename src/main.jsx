import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/UserInfo/Login.jsx';
import Register from './components/UserInfo/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import EstateDetails from './components/Home/EstateDetails.jsx';
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/estates.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/estate-details/:id",
        element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
        loader: ()=> fetch('/estates.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
