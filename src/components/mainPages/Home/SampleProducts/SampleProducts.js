import React from 'react';
import './SampleProducts.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SampleProducts = (props) => {
    const { _id, name, quantity, supplier, description, price, image } = props.product;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='card-container'>
            <div className='w-100 h-100'>
                <Card style={{ width: '100%', height: '100%' }}>
                    <Card.Img className='card-img rounded' style={{ width: '100%' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='fs-3'>{name}</Card.Title>
                        <div className="d-flex justify-content-around"> <Card.Text>
                            <span className='fw-bolder'>  <span className='fw-bolder fs-5'>Price:</span> ${price}</span>
                        </Card.Text>
                            <Card.Text>
                                <span className='fw-bolder'>  <span className='fw-bolder fs-5'>Quantity:</span> {quantity}</span>
                            </Card.Text></div>

                        <Card.Text>
                            <span className='fw-bolder'>Description:</span>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Supplier: </span>
                            {supplier}
                        </Card.Text>

                        <Button onClick={() => navigateToDetails(_id)} variant="primary fw-bold">Update</Button>
                    </Card.Body>
                </Card>
            </div>
        </div >);
};

export default SampleProducts;