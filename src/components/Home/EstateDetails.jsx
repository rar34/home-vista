import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {

    
    const [singleEstate, setSingleEstate] = useState({});
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);


    useEffect(() => {
        if (estates) {
            const estate = estates.find(estate => estate.id === idInt);
            setSingleEstate(estate);
        }
        document.title =`Home Vista | Estate Details ${idInt}`
    }, [estates, idInt]);

    const { estate_title, image, status, description, segment, area, price, location, facilities } = singleEstate || {};

    return (
        <div className="hero my-6 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img data-aos="flip-left" data-aos-delay="400" src={image} className=" lg:h-[420px] rounded-lg shadow-lg" />
                <div data-aos="flip-right" data-aos-delay="800">
                    <h4 className="text-2xl mb-2 font-semibold text-gray-500">Available for: <span className='text-[#23BE0A] bg-[#23BE0A0D]'>{status}</span></h4>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{estate_title}</h1>
                    <p className='font-semibold my-4'><span>Segment: </span> {segment}</p>
                    <hr />
                    <p className="flex gap-4 flex-col md:flex-row my-2 items-center font-bold">Facilities: {
                        facilities?.map((facility, idx) => <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2" key={idx}>{facility}</span>)
                    }</p>
                    <hr />
                    <p className='font-medium mt-4'><span className='font-bold'>Location:</span> {location}</p>
                    <p className="py-6">{description}</p>
                    <p className='font-semibold flex gap-14 text-gray-600'><span>Area: {area}</span> <span>Price: {price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;