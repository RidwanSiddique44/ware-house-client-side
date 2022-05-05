import React from 'react';
import './Inventory.css';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';

const Inventory = () => {
    const [products, setProducts] = useProducts();
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
                    const remainingProducts = products.filter(item => item._id !== id);
                    setProducts(remainingProducts)
                })
        }
    }

    return (
        <div className='my-5 py-5'>
            <div className=' container inventory-style'>

                {
                    products.map(product =>
                        <div className='card-container'>
                            <div>

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

export default Inventory;