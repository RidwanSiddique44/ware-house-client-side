import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    const [newItem, setNewItem] = useState({});
    const [sold, setSold] = useState(510);

    useEffect(() => {
        const url = `https://desolate-stream-08206.herokuapp.com/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [newItem]);
    const handleDecrease = (newQuantity) => {
        let quantity = parseInt(newQuantity) - 1;
        const updateQuantity = { quantity };
        const soldQuantity = sold + 1;
        setSold(soldQuantity);
        const url = `https://desolate-stream-08206.herokuapp.com/products/${inventoryId}`;

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
        const url = `https://desolate-stream-08206.herokuapp.com/products/${inventoryId}`;

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
            <h3 className="fw-bolder mt-5" style={{ color: 'Highlight' }}>PRODUCT DETAILS </h3>
            <hr className='bg-danger' />
            <div className='details-card mx-auto'>

                <Card style={{ width: '100%', height: '100%' }}>
                    <Card.Img className='card-img rounded' style={{ width: '100%' }} variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title className='fs-3'>{item.name}</Card.Title>
                        <div className="d-flex justify-content-around"> <Card.Text>
                            <span className='fw-bolder fs-3'>  <span className='fw-bolder fs-5'>Price:</span> ${item.price}</span>
                        </Card.Text>
                            <Card.Text>
                                <span className='fw-bolder fs-3'>  <span className='fw-bolder fs-5'>Quantity:</span> {item.quantity}</span>
                            </Card.Text></div>

                        <Card.Text>
                            <span className='fw-bolder'>Description:</span>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Supplier: </span>
                            {item.supplier}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Sold: </span>
                            <span id="sold-item">{sold}</span>
                        </Card.Text>
                        <Button onClick={() => handleDecrease(item.quantity)} variant="primary fw-bold">Delever</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=" m-5 p-5 text-start mx-auto quantt">
                <div className="text-center"><label className="form-label fs-1 fw-bolder">Product Quantity</label></div>
                <input name="number" type="number" id='quantity-item' className="form-control mb-3" placeholder="Enter quantity of product" />
                <button onClick={() => handleIncrease(item.quantity)} type="submit" className="btn btn-primary  w-100 mt-4 fw-bolder">Update</button>
            </div>
            <div className="ms-auto mb-5"> <Button className=' px-5 py-1 all-btn' variant="light border border-3 border-primary"><Link to="/inventory" className='fw-bolder text-decoration-none'><FontAwesomeIcon icon={faArrowAltCircleRight} /> Manage Inventories</Link></Button></div>
        </div >
    );
};

export default Details;