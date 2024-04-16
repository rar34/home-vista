import { useParams } from 'react-router-dom';


const EstateDetails = () => {
    const { id , estate_title } = useParams();
    return (
        <div>
            <h2 className="text-3xl">estates details here of {id}</h2>
            <p>title {estate_title}</p>
        </div>
    );
};

export default EstateDetails;