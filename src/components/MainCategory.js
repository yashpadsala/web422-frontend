import React from 'react'
import CategoryCard from './CategoryCard'
import '../assets/css/MainCategory.css'
import bedding from '../assets/image/beding.jpg'
import furniture from '../assets/image/furniture.jpg'
import homedecore from '../assets/image/homedecore.jpg'
import kitchen from '../assets/image/kitchen.jpg'

const MainCategory = () => {
    return (
        <div className='container'>
            <center><h2>Product Category</h2></center>
            <div className='row'>
            <CategoryCard img={bedding} alt='bedding Category Image' name='Bedding Category'/>
            <CategoryCard img={furniture} alt='furniture Category Image' name='Furniture Category'/>
            <CategoryCard img={homedecore} alt='homedecore Category Image' name='Homedecore Category'/>
            <CategoryCard img={kitchen} alt='kitchen Category Image' name='kitchen Category'/>
            </div>
            
        </div>
    )
}

export default MainCategory
