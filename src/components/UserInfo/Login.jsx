import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation  } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signInUser, googleLogin, gitHubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(() => {
                toast("login successful")
                navigate(location?.state || "/")
            })
            .catch(() => {
                toast("invalid-credential")
            })
    }

    // sign in with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast("login successful")
                if (result.user) {
                    navigate(location?.state || "/")
                    // <Navigate to={location?.state || "/"}></Navigate>
                }
            })
            .catch(() => {
                toast("invalid-credential")
            })
    }

    // sign in with github
    const handleGitHubLogin = () => {
        gitHubLogin()
            .then((result) => {
                toast("login successful")
                if (result.user) {
                    navigate(location?.state || "/")
                }
            })
            .catch(() => {
                toast("invalid-credential")
            })
    }

    return (
        <div className="w-full md:w-1/2 mx-auto bg-base-200 md:p-6 rounded-lg my-14">
            <div className="hero-content">

                <div className="card shrink-0 w-full p-2 md:p-6 bg-base-100">
                    <h2 className="text-3xl font-bold text-center" data-aos="fade-up" data-aos-delay="200">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div data-aos="fade-right" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Login</button>
                        </div>
                    </form>
                    <div data-aos="fade-down" data-aos-delay="400" className="px-6 py-2">
                        <p className="my-3 text-center font-bold">OR</p>

                        <button onClick={handleGoogleLogin} className="rounded-lg flex items-center btn btn-success w-full md:w-full p-2 mx-auto text-center text-white mb-4"><FaGoogle className="text-xl" /> Continue with google</button>
                        <button data-aos="fade-left" data-aos-delay="400" onClick={handleGitHubLogin} className="rounded-lg flex items-center btn btn-success w-full md:w-full p-2 mx-auto text-center text-white mb-4"><FaGithub className="text-xl" /> Continue with gitHub</button>
                        <p>Do not have an account ? <Link className="text-[#1DD100] font-bold" to="/register">Sign Up</Link> for free</p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;