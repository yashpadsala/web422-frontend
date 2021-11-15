import React,{useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './Header'
import App from './App'
import Hero from './Hero'
import Footer from './Footer'
import ProductList from './ProductList'
import '../assets/css/bootstrap.css';
import ProductCard from './ProductCard'
import RegistrationPage from '../pages/RegistrationPage'
import CategoryPage from '../pages/CartegoryPage'
import MainCategory from '../components/MainCategory'
import ProductContext from '../context/productContext'

const main = () => {
    const [products , setProducts] = useState([{}]);
;
    return (
        <div className='container'>
        <Router>
            <ProductContext.Provider value={{products, setProducts}}>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <main>
                        <Hero/>
                        <MainCategory />
                    </main>
                    <Footer/>
                </Route>

                <Route exact path="/products">
                    <Header/>
                    <main>
                        <ProductList/>
                    </main>
                    <Footer/>
                </Route>

                <Route exact path="/signup">
                    <RegistrationPage/>
                </Route>

                <Route exact path="/category">
                    <CategoryPage/>
                </Route>
            </Switch>
            </ProductContext.Provider>
        </Router>
        </div>
    )
}

export default main
