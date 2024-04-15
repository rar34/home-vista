import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl">Page  Not Found</h2>
            <Link to="/">Back to home</Link>
        </div>
    );
};

export default ErrorPage;