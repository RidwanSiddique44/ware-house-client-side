import React from 'react';
import './AllProducts.css';
import { Card } from 'react-bootstrap';

const AllProducts = (props) => {
    const { name, description, price, image } = props.product;
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

                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default AllProducts;