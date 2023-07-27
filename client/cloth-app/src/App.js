import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./routes/root.jsx";



const router = createBrowserRouter([
    {
        path : "/" ,
        element : <Root />,
    },
]);


function App() {
    return (
        <div>
            <ReactProvider router={router} />
        </div>
    );
}

export default App ;