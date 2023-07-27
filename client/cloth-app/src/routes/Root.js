import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function Root() {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <h1> Home </h1>
        },

        {
            path : "/products/:id",
            element : <h1> Products </h1>
        },

        {
            path : "/product/:id",
            element : <h1> Product </h1>
        }
    ])
    return router
}

export default Root;