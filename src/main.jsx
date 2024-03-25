import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import ListsBook from './Components/Home/ListsBook.jsx';
import PageRead from './Components/Home/PageRead.jsx';
import Mainlayout from './Layout/Mainlayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <ListsBook></ListsBook>
      },
      {
        path: "/pageread",
        element: <PageRead></PageRead>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
