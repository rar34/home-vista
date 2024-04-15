import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="w-full md:w-1/2 mx-auto bg-base-200 md:p-6 rounded-lg my-14">
            <div className="hero-content">

                <div className="card shrink-0 w-full p-2 md:p-6 bg-base-100">
                    <h2 className="text-3xl font-bold text-center">Please Login</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white font-medium">Login</button>
                        </div>
                    </form>
                    <div className="px-6 py-2">
                        <p className="my-3 text-center font-bold">OR</p>

                        <button className="rounded-lg flex items-center btn btn-success w-full md:w-full p-2 mx-auto text-center text-white mb-4"><FaGoogle className="text-xl" /> Continue with google</button>
                        <button className="rounded-lg flex items-center btn btn-success w-full md:w-full p-2 mx-auto text-center text-white mb-4"><FaGithub className="text-xl" /> Continue with gitHub</button>
                        <p>Do not have an account ? <Link className="text-[#1DD100] font-bold" to="/register">Sign Up</Link> for free</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;