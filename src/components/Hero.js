import React from 'react'
import books from '../assets/image/books.jpg'
import handmade from '../assets/image/handmade.jpg'
import sports from '../assets/image/sports.jpg'
import electronics from '../assets/image/electronics & computers.jpg'
import '../css/Hero.css'
import CategoryCard from '../components/CategoryCard'

const Hero = () => {
    return (   
        
        <div className="row">
            <CategoryCard img={books} alt='Books Category Image' name='Book'/>
            <CategoryCard img={handmade} alt='Handmade Category Image' name='Handmade'/>
            <CategoryCard img={sports} alt='Sports Category Image' name='Sport'/>
            <CategoryCard img={electronics} alt='Electronics Category Image' name='Electronic'/>
        </div>
    )
}

export default Hero
