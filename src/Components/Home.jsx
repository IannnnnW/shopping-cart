import { Link } from "react-router-dom"
import diamondnecklace from '../assets/rings.jpg'
import './style.css'

export default function Home(){
    return(
    <div className="home">
        <div className="gallery">
            <div className="overlay">
                <h1 className="welcome-heading">Welcome to Ian's Shop</h1>
                <p>What could you be interested in?</p>
                <div className="choices">
                    <Link className="bg-dark home-link" to={'/products'}>All Products</Link>
                    <Link className="bg-dark home-link" to={'/jewelery'}>Jewelery</Link>
                </div>
            </div>
        </div>
        
    </div>
    )
}

