import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { SimpleFormWithCustom } from './useEffect/SimpleFormWithCustom'
// import { MultipleCustomHooks } from './example/MultipleCustomHooks'

// import { Padre } from "./tarea-memo/Padre";
// import { TodoApp } from "./useReducer/TodoApp";
import { MainApp } from "./useContext/MainApp";
import { LoginPage } from "./useContext/LoginPage";
import { AboutPage } from "./useContext/AboutPage";
import { HomePage } from "./useContext/HomePage";

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
      path: "/",
      element: <MainApp />,
      children: [
          {
              path: "/",
              element: <HomePage />,
          },
          {
              path: "login",
              element: <LoginPage />,
          },
          {
              path: "about",
              element: <AboutPage />,
          },
          {
              path: "*",
              element: <Navigate to="/" replace />
          }
      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
  // </BrowserRouter>
  ,
)
