
const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-white">
            <aside>
                <h6 className="footer-title">About</h6>
                <p>
                    HomeVista: Your destination for dream homes. <br /> Diverse residential listings, expert guidance, <br /> and personalized service ensure a <br /> seamless experience. Find yours today!</p>
            </aside>
            <nav>
                <h6 className="footer-title">Contact info</h6>
                <p>Call-centre: 1 (323) 938-5798</p>
                <p>Fax: 1 (888) 637-7262</p>
                <p>Email: info@styleixthemes.com</p>

                <p>1840 E Garvey Avenue Street, <br /> West Covina, CA 91791, U.S.</p>

            </nav>
            <nav>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">Apartment for sale</a>
                <a className="link link-hover">Apartment for Rent</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            
        </footer>
    );
};

export default Footer;