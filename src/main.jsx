import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
   
      // {
      //   path: '/admin/dashboard',
      //   element:<Dashboard/>
      // }
    ]
  },
  {
    path: "/admin/dashboard",
    // element: <AuthenticatedLayout></AuthenticatedLayout>,
    element: <Dashboard></Dashboard>
      },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </StrictMode>,
)
