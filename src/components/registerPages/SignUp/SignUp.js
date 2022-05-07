import React from 'react';
import './SignUp.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../sharedPages/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSignin from '../Social/GoogleSignin';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate('/signin');
    }
    const [createUserWithEmailAndPassword, user, loading, error,]
        = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    const location = useLocation();
    const [token, setToken] = useToken(user);
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
        toast(errorText);
    }

    return (
        <div className='conatiner bg-light border border-danger p-5 form-section my-5 mx-auto'>
            <h3 className="text-center">Sign Up</h3>
            <hr className="bg-danger border border-1 border-danger" />
            <form onSubmit={handleSignup}>
                <div className="text-start"><label className="form-label">Name</label></div>
                <input name="text" type="text" className="form-control mb-3" placeholder="Enter your name" />
                <div className="text-start"><label className="form-label">Phone</label></div>
                <input name="number" type="number" className="form-control mb-3" placeholder="Enter your phone number" />
                <div className="text-start"><label className="form-label">Email</label></div>
                <input name="email" type="email" className="form-control mb-3" placeholder="Enter your email" required />

                <div className="text-start"><label className="form-label">Password</label></div>
                <input name="password" type="password" className="form-control mb-3" placeholder="Enter password" required />
                <button type="submit" className="btn btn-primary  w-50 mt-4 fw-bolder">Sign Up</button>
            </form>
            <p className='text-center mt-3'>Already have an account? <Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign-In</Link> </p>
            <GoogleSignin></GoogleSignin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;