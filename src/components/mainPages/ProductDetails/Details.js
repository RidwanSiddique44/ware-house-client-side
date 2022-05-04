import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return (
        <div className='container'>
            <div>

                <Card style={{ width: '100%' }}>
                    <Card.Img className='card-img' style={{ width: '100%' }} variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bolder'> price: {item.price}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Description:</span>
                            {item.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Details;