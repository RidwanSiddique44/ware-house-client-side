import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Banner from './Banner/Banner';
import Extra from './ExtraSection/Extra';
import './Home.css';
import SampleProducts from './SampleProducts/SampleProducts';


const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            {/*------------ banner section -------------- */}
            <Banner></Banner>
            <h3 className="fw-bolder mt-5" style={{ color: 'Highlight' }}> PRODUCTS </h3>
            <hr className='bg-danger' />

            <div className=' container item-container'>

                {
                    products.slice(0, 6).map(product => <SampleProducts key={product._id} product={product} ></SampleProducts>)
                }
            </div>
            <div className="ms-auto"> <Button className=' px-5 py-1 all-btn' variant="light border border-3 border-primary"><Link to="/inventory" className='fw-bolder text-decoration-none'><FontAwesomeIcon icon={faArrowAltCircleRight} /> Manage Inventories</Link></Button></div>
            {/*------------ extra section -------------- */}
            <Extra></Extra>
        </div>
    );
};

export default Home;