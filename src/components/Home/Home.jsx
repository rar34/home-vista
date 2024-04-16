import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Banner from "./Banner";


const Home = () => {
    const estates = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div  className="text-center my-14 text-white">
                <h2 data-aos="fade-down-right" data-aos-delay="400" className="text-3xl text-gray-300 font-bold mb-2">Our Estates</h2>
                <p data-aos="fade-down-left" data-aos-delay="400" className="text-gray-400">Explore our diverse estate listings for your dream home. From cozy cottages to luxurious villas, we have something for everyone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;