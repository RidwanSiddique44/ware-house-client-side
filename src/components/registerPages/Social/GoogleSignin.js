import React from 'react';
import './GoogleSignin.css';
import googleicon from '../../Images/Icons/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../sharedPages/Loading/Loading';

const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (loading || loading) {
        return <Loading></Loading>
    }

    if (error || error) {
        toast(<p className='text-danger'>Error: {error?.message} {error?.message}</p>)
    }
    let from = location.state?.from?.pathname || "/";
    if (user || user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='line bg-secondary w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light border border-3 border-secondary rounded-pill w-50 d-block mx-auto my-2 google-btn'>
                    <img style={{ width: '30px' }} src={googleicon} alt="" />
                    <span className='px-2 fw-bolder'>Google Sign In</span>
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default GoogleSignin;