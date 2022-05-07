import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myproducts = () => {
    const [user] = useAuthState(auth);
    const [myproducts, setMyproducts] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/useritems?email=${email}`)
            .then(res => res.json())
            .then(data => setMyproducts(data))
    }, [user]);
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to detele it?');
        if (confirm) {
            const url = `http://localhost:5000/products/${id}`;
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
        </div>
    );
};

export default Myproducts;