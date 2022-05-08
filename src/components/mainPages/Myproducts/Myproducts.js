import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosPrivate from '../../AxiosPrivate/axiosPrivate';

const Myproducts = () => {
    const [user] = useAuthState(auth);
    const [myproducts, setMyproducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const myProducts = async () => {
            const email = user?.email;
            const url = `https://desolate-stream-08206.herokuapp.com/useritems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyproducts(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        myProducts();
    }, [user])
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to detele it?');
        if (confirm) {
            const url = `https://desolate-stream-08206.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingProducts = myproducts.filter(item => item._id !== id);
                    setMyproducts(remainingProducts)
                })
        }
    }
    return (
        <div className='my-5 py-5'>
            <h3 className="fw-bolder" style={{ color: 'Highlight' }}>MY ALL PRODUCTS </h3>
            <hr className='bg-danger' />
            <div className=' container inventory-style py-5 my-5'>

                {
                    myproducts.map(product =>
                        <div key={product._id} className='card-container'>
                            <Card style={{ width: '100%', height: '100%' }}>
                                <Card.Img className='card-img rounded' style={{ width: '100%' }} variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title className='fs-3'>{product.name}</Card.Title>
                                    <div className="d-flex justify-content-around"> <Card.Text>
                                        <span className='fw-bolder'>  <span className='fw-bolder fs-5'>Price:</span> ${product.price}</span>
                                    </Card.Text>
                                        <Card.Text>
                                            <span className='fw-bolder'>  <span className='fw-bolder fs-5'>Quantity:</span> {product.quantity}</span>
                                        </Card.Text></div>

                                    <Card.Text>
                                        <span className='fw-bolder'>Description:</span>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='fw-bolder'>Supplier: </span>
                                        {product.supplier}
                                    </Card.Text>
                                    <Button onClick={() => handleDelete(product._id)} variant="primary fw-bold">Delete</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    )
                }
            </div>
            <div className="ms-auto"> <Button className=' px-5 py-1 all-btn' variant="light border border-3 border-primary"><Link to="/inventory" className='fw-bolder text-decoration-none'><FontAwesomeIcon icon={faArrowAltCircleRight} /> Manage Inventories</Link></Button></div>
        </div>
    );
};

export default Myproducts;