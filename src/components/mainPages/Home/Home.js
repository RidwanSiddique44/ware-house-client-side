import React from 'react';
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

            <div className=' container review-container'>

                {
                    products.slice(0, 6).map(product => <SampleProducts key={product._id} product={product} ></SampleProducts>)
                }
            </div>
            {/*------------ extra section -------------- */}
            <Extra></Extra>



        </div>
    );
};

export default Home;