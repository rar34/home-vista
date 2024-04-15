import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="max-w-7xl mx-auto my-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;