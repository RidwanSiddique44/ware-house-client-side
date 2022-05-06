import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    const [newItem, setNewItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [newItem]);
    const handleDecrease = (newQuantity) => {
        let quantity = parseInt(newQuantity) - 1;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/products/${inventoryId}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Quantity Updated");
                const newProducts = item;
                setNewItem(newProducts);
            });
    };

    const handleIncrease = (newQuantity) => {
        const addValue = document.getElementById('quantity-item').value;
        let addQuantity = parseInt(addValue);
        let quantity = parseInt(newQuantity) + addQuantity;
        const updateQuantity = { quantity };
        console.log(updateQuantity)
        const url = `http://localhost:5000/products/${inventoryId}`;

        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Quantity Updated");
                const newProducts = item;
                setNewItem(newProducts);
            });

    };

    return (
        <div className='container'>
            <div className='w-75 mx-auto'>

                <Card style={{ width: '100%' }}>
                    <Card.Img className='card-img' style={{ width: '100%' }} variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bolder'> quantity: {item.quantity}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'> Price: {item.price}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Description:</span>
                            {item.description}
                        </Card.Text>
                        <Button onClick={() => handleDecrease(item.quantity)} variant="primary">Delever</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=" m-5 p-5 text-start w-50 mx-auto">
                <div className="text-center"><label className="form-label fs-1 fw-bolder">Product Quantity</label></div>
                <input name="number" type="number" id='quantity-item' className="form-control mb-3" placeholder="Enter quantity of product" />
                <button onClick={() => handleIncrease(item.quantity)} type="submit" className="btn btn-primary  w-100 mt-4 fw-bolder">Update</button>
            </div>
        </div >
    );
};

export default Details;