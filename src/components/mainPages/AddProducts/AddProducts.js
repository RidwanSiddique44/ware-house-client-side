import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className='container border border-danger p-5 text-start mt-5 mb-5 w-75 ms-auto'>
            <h3 className="text-center">Add Products</h3>
            <hr className="bg-danger" />
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <label>Product Name</label>
                <input placeholder='Name' className='mb-3'  {...register("name", { required: true, maxLength: 20 })} />
                <label>Supplier Name</label>
                <input placeholder='Supplier' className='mb-3'  {...register("supplier", { required: true, maxLength: 20 })} />
                <label>Product Image</label>
                <input placeholder='Photo url' className='mb-3'  {...register("image")} />
                <label>Product Quantity</label>
                <input placeholder='Quantity' className='mb-3' type="number" {...register("quantity")} />
                <label>Product Price</label>
                <input placeholder='Price' className='mb-3' type="number" {...register("price")} />
                <label>Product Description</label>
                <textarea placeholder='Description' className='mb-3'  {...register("description")} />
                <input className='mb-3 bg-danger py-2 text-light fw-bolder' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;