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
        <div className='my-5 py-5 inv-div '>
            <div className=' container inventory-style'>

                {
                    myproducts.map(product =>
                        <div key={product._id} className='card-container h-100'>
                            <div className='w-100'>

                                <Card style={{ width: '100%' }}>
                                    <Card.Img className='card-img' style={{ width: '100%' }} variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            <span className='fw-bolder'> price: {product.price}</span>
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='fw-bolder'>Description:</span>
                                            {product.description}
                                        </Card.Text>
                                        <Button onClick={() => handleDelete(product._id)} variant="primary">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Myproducts;