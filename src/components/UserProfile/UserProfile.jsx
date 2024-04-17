import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user;
    return (
        <div className="card my-10 text-white md:min-h-[350px] lg:min-h-[500px] flex-col">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="User profile picture is here" className="rounded-xl w-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {displayName}</h2>
                <p>Email: {email}</p>
                <Link to="/update-profile"><button className="btn text-white btn-success">Update Profile</button></Link>
            </div>
        </div>
    );
};

export default UserProfile;