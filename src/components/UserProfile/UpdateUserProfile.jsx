import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";


const UpdateUserProfile = () => {

    

    const navigate = useNavigate()
    const { user, updateUserProfile } = useContext(AuthContext)
    const { displayName, photoURL } = user;

    const handleUpdateUserProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo)
        updateUserProfile(name, photo)
            .then(() => {
                toast("User information updated successfully")
                navigate("/user-profile")
            })
            .catch(error => console.log(error.message))
       
        
    }
    useEffect(() => {
        document.title ="Home Vista | UpdateProfile"
    }, []);

    return (
        <div className="w-full md:w-1/2 mx-auto bg-base-200 md:p-6 rounded-lg my-14">
            <div className="hero-content">

                <div className="card shrink-0 w-full p-2 md:p-6 bg-base-100">
                    <h2 className="text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="200">Update your profile</h2>
                    <form onSubmit={handleUpdateUserProfile} className="card-body">
                        <div data-aos="fade-right" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" name="name" placeholder={displayName} className="input input-bordered" />
                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder={photoURL} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Save</button>
                        </div>
                    </form>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateUserProfile;