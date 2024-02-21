import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Products, JeweleryProducts} from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'products/',
        element: <Products/>
      },
      {
        path:'jewelery/',
        element: <JeweleryProducts/>
      },
      {
        path: 'cart/',
        element: <Cart/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
