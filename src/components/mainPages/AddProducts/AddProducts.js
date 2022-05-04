import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container text-start mt-5 mb-5 w-50 ms-auto'>
            <h3 className="text-center">Add Products</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <label>Product Name</label>
                <input className='mb-3'  {...register("firstName", { required: true, maxLength: 20 })} />
                <label>Product Image</label>
                <input className='mb-3'  {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <label>Product Quantity</label>
                <input className='mb-3' type="number" {...register("age", { min: 18, max: 99 })} />
                <input className='mb-3 bg-primary text-light fw-bolder' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;