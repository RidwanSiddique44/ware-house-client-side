import React from 'react';
import './Loading.css';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center spinner-style'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;