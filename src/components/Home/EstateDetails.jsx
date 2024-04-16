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

    const { estate_title, image, status, description, segment, area, price } = singleEstate || {};

    return (
        <div className='text-white'>
            <h2 className="text-3xl">estates details here of {id}</h2>
            <p>title {estate_title}</p>
        </div>
    );
};

export default EstateDetails;