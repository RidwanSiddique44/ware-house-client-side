import React from 'react';
import './SignIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../sharedPages/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSignin from '../Social/GoogleSignin';
import useToken from '../../Hooks/useToken';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateSignUp = () => {
        navigate('/signup');
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const location = useLocation();
    const [token, setToken] = useToken(user);

    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    let errorText;
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
        toast(errorText);
    }
    const [sendResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }

    const resetPassword = async (e) => {
        const email = document.getElementById('e-value').value;
        if (email) {
            await sendResetEmail(email);
            toast('Sending email...');
        }
        else {
            toast('Please, Enter your email address !!');
        }
    }

    return (
        <div className='conatiner bg-light border border-danger p-5 form-section my-5 mx-auto'>
            <h3 className="text-center">Sign In</h3>
            <hr className="bg-danger border border-1 border-danger" />
            <form onSubmit={handleSignIn}>
                <div className="text-start"><label className="form-label">Email</label></div>
                <input name="email" type="email" id='e-value' className="form-control mb-3" placeholder="Enter your email" required />
                <div className="text-start"><label className="form-label">Password</label></div>
                <input name="password" type="password" className="form-control mb-3" placeholder="Enter password" required />
                <button type="submit" className="btn btn-primary w-50 mt-4 fw-bolder">Sign In</button>
            </form>
            <p className='text-center mt-3'>Need an account? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateSignUp}>Please Sign-Up</Link> </p>
            <p>Forgotten Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <GoogleSignin></GoogleSignin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;