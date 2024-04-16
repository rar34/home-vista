import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Banner from "./Banner";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates)

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-bold text-center my-10">Our Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;