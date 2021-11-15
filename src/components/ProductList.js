import React from 'react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'


const ProductList = () => {
    return (
        <div className='container-fluid'>
            <div className='row text-centre' >
            <ProductCard products='prdt1'/>
            <ProductCard products='prdt2'/>
            <ProductCard products='prdt3'/>
            <ProductCard products='prdt4'/>
            <ProductCard products='prdt5'/>
            <ProductCard products='prdt6'/>
            <ProductCard products='prdt7'/>
            <ProductCard products='prdt8'/>
         
            </div>
            <div className='centre'>
            <Pagination />
            </div>
        </div>
    )
}

export default ProductList
