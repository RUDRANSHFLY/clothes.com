import {RouterProvider} from "react-router-dom";
import Root from "./routes/Root.js";



const router = Root();


function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App ;