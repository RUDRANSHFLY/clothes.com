import 
    {
        createBrowserRouter,
        RouterProvider,

    } from 'react-router-dom';

    import Home from './pages/Home/Home.jsx';
    import Product from './pages/Product/Product.jsx';
    import Products from './pages/Products/Products.jsx';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home/>
        },
        
        {
            path:"/product/:id",
            element: <Product/>
        },

        {
            path:"/products/:id",
            element: <Products/>
        },
    ]
)


function App() {
    return (
        <div>
            Cloth_App 
        </div>
    );
}

export default App ;