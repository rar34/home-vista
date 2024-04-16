import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if(!user){
        return <Navigate to="/login" />
    }
    return (
            <div>
                {children}
            </div>
        );
};

export default PrivateRoutes;