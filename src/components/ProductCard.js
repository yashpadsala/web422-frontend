import React from 'react'
import img from '../assets/image/books.jpg'
import '../assets/css/ProductCard.css'

const ProductCard = (props) => {
    return (
       
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className='card'>
                <h1>{props.products}</h1>
                <img src={img} alt="Website Logo"></img>
                <p>Some text about the products..</p>
                <p class="price">$19.99</p>
                <p>Category</p>
                
            
                <p><button>Add to Cart</button></p>
                </div>
            </div>
          
                
    )
}

export default ProductCard
