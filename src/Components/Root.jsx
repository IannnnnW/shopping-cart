import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import home from '../assets/home.svg'
import jewel from '../assets/jewel.svg'
import shoppingcart from '../assets/shoppingcart.svg'
import './style.css'

function Root() {
  const [cartItems, setCartItems] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  return(
    <div className='root'>
        <div id="sidebar">
            <ul>
                <li><Link to={'/products'}><img src={home} className='icon'/>All Products</Link></li>
                <li><Link to={'/products/jewelery'}><img src={jewel} className='icon'/>Jewelery</Link></li>
            </ul>
            <span>&copy; Copyright Reserved <a href="https://github.com/IannnnnW">IannnnnW</a> 2024</span>
        </div>
      <Outlet context={[cartItems, setCartItems, totalCost, setTotalCost]}/>
      <div className='cartsidebar'>
      <span className='cartcount'>{cartItems.length}</span><Link to={'/cart'}><img className='icon' src={shoppingcart}/></Link>
      </div>
    </div>
  )
}

export default Root
