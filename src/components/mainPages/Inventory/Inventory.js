import React from 'react';
import './Inventory.css';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Inventory = () => {
    const [products, setProducts] = useProducts();
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
                    const remainingProducts = products.filter(item => item._id !== id);
                    setProducts(remainingProducts)
                })
        }
    }

    return (
        <div className='my-5 py-5'>
            <h3 className="fw-bolder" style={{ color: 'Highlight' }}>MANAGE PRODUCTS AVAILABLE IN THE STOCK</h3>
            <hr className='bg-danger' />
            <div className=' container inventory-style py-5 my-5'>

                {
                    products.map(product =>
                        <div key={product._id} className='card-container '>
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
                                    <Button onClick={() => handleDelete(product._id)} variant="primary fw-bold relative-bottom">Delete</Button>
                                </Card.Body>
                            </Card>

                        </div>

                    )
                }
            </div>
            <div className="ms-auto mb-5"> <Button className=' px-5 py-1 all-btn' variant="light border border-3 border-primary"><Link to="/addproduct" className='fw-bolder text-decoration-none'><FontAwesomeIcon icon={faArrowAltCircleRight} /> Add Products </Link></Button></div>
        </div>
    );
};

export default Inventory;