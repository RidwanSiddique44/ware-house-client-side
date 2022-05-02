import React from 'react';
import './RequireAuth.css';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../sharedPages/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center mt-5 pt-5 varify-style'>
            <h3 className='text-danger mb-3'>Your email is not verified!!</h3>
            <h4 className='text-primary mb-3'> Please verify your email !!</h4>
            <button
                className='btn btn-primary fw-bolder'
                onClick={async () => {
                    await sendEmailVerification();
                }}> Re-send Email</button>
        </div>
    }

    return children;
};

export default RequireAuth;