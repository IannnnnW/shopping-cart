import { useOutletContext } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './style.css'

const CartItem = ({item, removeItem, getCost})=>{
    const [count, setCount] = useState(1)
    const [itemCost, setItemCost] = useState(item.price)

    function handleDecrease(){
        setCount(prevCount => {
            getCost(item.id, (prevCount - 1) * item.price, (prevCount - 1))
            setItemCost((prevCount - 1) * item.price)
            return prevCount - 1
        })
    }
    
    function handleIncrease(){
        setCount(prevCount => {
            getCost(item.id, (prevCount + 1) * item.price, (prevCount + 1))
            setItemCost((prevCount + 1) * item.price)
            return prevCount + 1
        })
    }

    useEffect(()=>{
        if(item.count < 1){
            removeItem(item.id)
        }
    }, [count])

    return(
        <div className="cartcard">
            <p className="productprice">${item.price}</p>
            <img style={{width:'100px'}} src={item.imageUrl}/>
            <p>{item.title}</p>
            <div className="cartItemBottom">
                <button className='btn' onClick={handleDecrease}>-</button>
                {item.count}
                <button className='btn' onClick={handleIncrease}>+</button>
            </div>
            <span>{(item.count * item.price).toFixed(2)}</span>
        </div>
    )
}

const Cart = ()=>{
    let [cartItems, setCartItems, totalCost, setTotalCost] = useOutletContext()

    function handleRemoveItem(id){
        setCartItems(cartItems.filter(item => item.id != id))
    }
    
    function handleCountChange(id, cost, count){
        setCartItems(cartItems.map(item => {
            if(item.id == id){
                return {...item, cost, count}
            } else {
                return item;
            }
        }))
    }

    useEffect(() => {
        setTotalCost(cartItems.reduce((total, item) => total + item.cost, 0))
    }, [cartItems])
    
    return(
        (cartItems.length 
        ? 
        <div>
            <div className='cart'>
            {cartItems.map(item => 
                <CartItem key={item.id} item={item} removeItem={handleRemoveItem} getCost={handleCountChange}/>
            )}
                <p>Your total is ${totalCost.toFixed(2)}</p>
                <button className="bg-dark checkoutbtn">Check out!</button>
            </div>
        </div>
        :
        <div className="emptycart">
            <p>The cart is currently empty. <Link to={'/products'}>Start shopping</Link></p>
        </div>
        )
    )
}

export default Cart;

