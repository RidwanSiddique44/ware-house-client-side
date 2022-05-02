import React from 'react';
import './SignUp.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate('/signin');
    }
    const [createUserWithEmailAndPassword, user, loading, error,]
        = useCreateUserWithEmailAndPassword(auth);

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='conatiner border border-danger p-5 form-section my-5 mx-auto'>
            <h3 className="text-center">Sign Up</h3>
            <hr className="bg-danger border border-1 border-danger" />
            <form onSubmit={handleSignup}>

                <div className="text-start"><label className="form-label">Email</label></div>
                <input name="email" type="email" className="form-control" placeholder="Enter your email" required />


                <div className="text-start"><label className="form-label">Password</label></div>
                <input name="password" type="password" className="form-control" placeholder="Enter password" required />
                <button type="submit" className="btn btn-primary  w-50 mt-4 fw-bolder">Sign Up</button>

            </form>
            <p className='text-center mt-3'>Do not sign Up yet? <Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={navigateSignIn}>Please SignIn</Link> </p>
        </div>
    );
};

export default SignUp;