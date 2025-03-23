import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Bookdetail from './components/Bookdetail.jsx';
import ListedBooks from './components/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element: <Bookdetail></Bookdetail>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/wishlist',
        element: <ListedBooks></ListedBooks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
