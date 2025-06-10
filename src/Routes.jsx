import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home";
import App from "./App";


const routes = [
    {
        path:"/",
        element:<App />,
        errorElement:<Errorpage />
    },
    {
        path:"/Home",
        element:<Home />,
        errorElement:<Errorpage />
    },
    {
        path:"/Aboutus",
        element:<Aboutus />,
        errorElement:<Errorpage />
    },
    {
        path:"/contacts",
        element:<Contact />,
        errorElement:<Errorpage />
    }

]

export default routes