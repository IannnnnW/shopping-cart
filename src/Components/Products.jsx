import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"
import { useOutletContext } from "react-router-dom"
import toast, {Toaster} from "react-hot-toast"
import './style.css'

const ProductCard = ({id, title, imageUrl, price})=>{
    const [cartItems, setCartItems] = useOutletContext()

    function handleClick(title, price){
       if(cartItems.filter(item => item.title == title).length){
        toast('Item is already in cart')
       } else {
        setCartItems([...cartItems, {id, title, imageUrl, price, cost:price, count:1}])
        toast(`${title} Added to Cart`)
       }
    }
    return(
        <div className="card">
            <p className="productprice">${price}</p>
            <img style={{width:'100px'}} src={imageUrl}/>
            <p>{title}</p>
            <div className="cardbottom">
                <button className="addbtn" onClick={()=>handleClick(title, price)}>Add to Cart</button>
                <Toaster/>
            </div>
        </div>
    )
}

const Products = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/`)
            .then(response =>response.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <HashLoader/>
    }
    return(
        <div className='allproductscontent'>
            {products.map(product =>
                <ProductCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} category={product.category}/>
            )}
        </div>
    )
}

const JeweleryProducts = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
            .then(response =>response.json())
            .then(data =>{
                setProducts(data)
                setLoading(false)
            })
    }, [])
    if(loading){
        return <HashLoader/>
    }
    return(
        <div className='jewelerycontent'>
            {products.map(product =>
                <ProductCard key={product.id} title={product.title} imageUrl={product.image} price={product.price} category={product.category}/>
            )}
        </div>
    )
}
export {Products, JeweleryProducts};