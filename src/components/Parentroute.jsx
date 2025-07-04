import React from 'react'
import Navbar from './header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './header/Home';
import Contact from './header/Contact';
import Product from './header/Product';
import SinglePost from './SinglePost';
import Protectedroute from './Protectedroute';
import Login from './Login';
import Cart from './Cart';

const Parentroute = () => {

//    const userprofile = false;



    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/profile' element = {<Login/>} ></Route>
                    <Route path='/products' element = {<Product/>}/>
                    <Route path="/products/category/:categoryName" element={<Product />} />
                    <Route path='/products/:id' element = {<SinglePost/>}/>
                    <Route path='/cart' element = {
                        <Protectedroute>
                            <Cart/>
                        </Protectedroute>
                    }/>
                </Routes>
                


            </BrowserRouter>
        </>
    )
}

export default Parentroute