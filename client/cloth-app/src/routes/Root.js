import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";


import Home from '../pages/Home/Home.jsx';
import Product from '../pages/Product/Product.jsx';
import Products from '../pages/Products/Products.jsx';


import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import '../App.scss'


function layout(){
    return(
        <div className="app">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}



function Root() {
    const router = createBrowserRouter([
        {
            path : "/" ,
            element : layout(),
            children: [
                {
                    path : "/",
                    element : <Home />
                },
                
                {
                    path : "/product/:id",
                    element : <Product />
                },
        
                {
                    path : "/products/:id",
                    element : <Products />
                },
            ]
        },
    ]);
    return router
}

export default Root;