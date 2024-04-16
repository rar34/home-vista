import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {
    const { id, estate_title, image, status, description, segment, area, price } = estate;
    console.log(estate);
    return (
        <div id='products' className="card bg-base-100 shadow-md" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500">
            <figure className='relative'>
                <img src={image} alt="" />
                <p className='absolute top-3 right-3 bg-base-100 shadow-xl px-5 py-2 text-green-500 font-bold text-xl rounded-md'>{status}</p>
            </figure>
            <div className="card-body">
                <p className='font-medium flex text-gray-600 justify-between'><span>Area: {area}</span> <span>Price: {price}</span></p>
                <hr />
                <h2 className="card-title">{estate_title}</h2>
                <hr />
                <p className='font-semibold'>Segment: {segment}</p>
                <p className='text-gray-600'>{description}</p>
                <div className="card-actions">
                    <Link to={`/estate-details/${id}`}>
                        <button className="btn btn-success text-white w-full">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Estate;

Estate.propTypes = {
    estate: PropTypes.object
}