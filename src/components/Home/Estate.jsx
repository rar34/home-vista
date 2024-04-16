import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {
    const { estate_title, image, status } = estate;
    console.log(estate);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={image} alt="" />
                <p className='absolute top-3 right-3 bg-neutral shadow-md px-5 py-2 text-white font-bold text-xl rounded-md'>{status}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to="/estate-details">
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