import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const [singleEstate, setSingleEstate] = useState({});
    const estates = useLoaderData();
    console.log(singleEstate)
    const { id } = useParams();
    const idInt = parseInt(id);


    useEffect(() => {
        if (estates) {
            const estate = estates.find(estate => estate.id === idInt);
            setSingleEstate(estate);
        }
    }, [estates, idInt]);

    const { estate_title, image, status, description, segment, area, price, location, facilities } = singleEstate || {};

    return (
        <div className="hero my-6 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" lg:h-[420px] rounded-lg shadow-lg" />
                <div>
                    <h4 className="text-2xl mb-2 font-semibold text-gray-500">Available for: <span className='text-[#23BE0A]'>{status}</span></h4>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{estate_title}</h1>
                    <p className='font-semibold my-4'><span>Segment: </span> {segment}</p>
                    <hr />
                    <p className="flex gap-4 flex-col md:flex-row my-2 items-center font-bold">Facilities: {
                        facilities?.map((facility, idx) => <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2" key={idx}>{facility}</span>)
                    }</p>
                    <hr />
                    <p className='font-medium'><span className='font-bold'>Location:</span> {location}</p>
                    <p className="py-6">{description}</p>
                    <p className='font-semibold flex gap-14 text-gray-600'><span>Area: {area}</span> <span>Price: {price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;