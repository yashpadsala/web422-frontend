import React from 'react'

const CategoryCard = (props) => {
    return (
        <div className='col-xs-10 col-sm-5 col-md-3 col-lg-3 col-xl-3'>
            <div className='column'>
                <img className='rounded' src={props.img} alt={props.alt}></img>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default CategoryCard
