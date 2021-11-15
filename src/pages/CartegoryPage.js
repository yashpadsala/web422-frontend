import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryCard from '../components/CategoryCard'

import books from '../assets/image/books.jpg'
import handmade from '../assets/image/handmade.jpg'
import sports from '../assets/image/sports.jpg'
import electronics from '../assets/image/electronics & computers.jpg'

const CartegoryPage = () => {
    return (
        <div className='container'>
            <Header/>
            <main>
                
            <div className='row'>
            <CategoryCard img={books} alt='Books Category Image' name='Book Category'/>
            <CategoryCard img={handmade} alt='Handmade Category Image' name='Handmade Category'/>
            <CategoryCard img={sports} alt='Sports Category Image' name='Sport Category'/>
            <CategoryCard img={electronics} alt='Electronics Category Image' name='Electronic Category'/>
            <CategoryCard img={books} alt='Books1 Category Image' name='Book1 Category'/>
            <CategoryCard img={handmade} alt='Handmade1 Category Image' name='Handmade1 Category'/>
            <CategoryCard img={sports} alt='Sports1 Category Image' name='Sport1 Category'/>
            <CategoryCard img={electronics} alt='Electronics1 Category Image' name='Electronic1 Category'/>
            </div>
            </main>
            <Footer/>
        </div>
    )
}

export default CartegoryPage
