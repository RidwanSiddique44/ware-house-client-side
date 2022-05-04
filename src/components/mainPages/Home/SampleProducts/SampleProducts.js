import React from 'react';
import './SampleProducts.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SampleProducts = (props) => {
    const { _id, name, description, price, image } = props.product;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='card-container'>
            <div>

                <Card style={{ width: '100%' }}>
                    <Card.Img className='card-img' style={{ width: '100%' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bolder'> price: {price}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Description:</span>
                            {description}
                        </Card.Text>
                        <Button onClick={() => navigateToDetails(_id)} variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div >);
};

export default SampleProducts;