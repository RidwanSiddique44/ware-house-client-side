import React from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
    return (
        <div className='conatiner border border-danger p-5 form-section my-5 mx-auto'>
            <h3 className="text-center">Sign In</h3>
            <hr className="bg-danger border border-1 border-danger" />
            <form onSubmit={handleSignIn}>
                <div className="text-start"><label className="form-label">Email</label></div>
                <input name="email" type="email" className="form-control" placeholder="Enter your email" required />


                <div className="text-start"><label className="form-label">Password</label></div>
                <input name="password" type="password" className="form-control" placeholder="Enter password" required />
                <button type="submit" className="btn btn-primary w-50 mt-4 fw-bolder">Sign In</button>
            </form>
            <p className='text-center mt-3'>Do not sign Up yet? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateSignUp}>Please SignUp</Link> </p>
        </div>
    );
};

export default SignIn;