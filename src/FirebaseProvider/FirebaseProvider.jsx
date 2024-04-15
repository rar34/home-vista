import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
    children: PropTypes.node
}