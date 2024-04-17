import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    useEffect(() => {
        document.title ="Home Vista | ErrorPage"
    }, []);
    return (
        <div className="text-center min-h-screen py-20 text-white">
            <h2 className="text-5xl">Error-404:</h2>
            <h4 className="text-3xl">Page  Not Found</h4>
            <Link to="/">Back to home</Link>
        </div>
    );
};

export default ErrorPage;