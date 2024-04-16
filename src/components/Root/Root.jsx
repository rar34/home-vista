import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto py-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;