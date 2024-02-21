import { Outlet, NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/fulllogo.png'
import shoppingcart from '../assets/shoppingcart.svg'
import './style.css'

function Root() {
  const [cartItems, setCartItems] = useState([])
  const [totalCost, setTotalCost] = useState(0)

  return(
    <div className='root'>
        <div className="sidebar">
            <div>
              <img src={logo}/>
              <ul className='links'>
                <li><NavLink className={({ isActive }) =>
                      isActive
                        ? "bg-dark"
                        : ""
                    }to={'/'} ><i className="bi bi-house"></i> Home</NavLink>
                </li>
                <li><NavLink className={({ isActive }) =>
                      isActive
                        ? "bg-dark"
                        : ""
                    } to={'/products'}><i className="bi bi-bag"></i> All Products</NavLink>
                </li>
                <li><NavLink className={({ isActive }) =>
                      isActive
                        ? "bg-dark"
                        : ""
                    } to={'/jewelery'}><i className="bi bi-gem"></i> Jewellery</NavLink>
                </li>
              </ul>
            </div>
        </div>
        <Outlet context={[cartItems, setCartItems, totalCost, setTotalCost]}/>
      <div className='cartsidebar'>
        <span className='cartcount'>{cartItems.length}</span><Link to={'/cart'}><img className='icon' src={shoppingcart}/></Link>
      </div>
    </div>
  )
}

export default Root
