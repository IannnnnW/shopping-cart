import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Products, JeweleryProducts} from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'products/',
        element: <Products/>
      },
      {
        path:'products/jewelery/',
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
