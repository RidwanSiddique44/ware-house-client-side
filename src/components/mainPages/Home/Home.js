import React from 'react';
import Banner from './Banner/Banner';
import Extra from './ExtraSection/Extra';
import './Home.css';


const Home = () => {
    return (
        <div>
            {/*------------ banner section -------------- */}
            <Banner></Banner>
            {/*------------ extra section -------------- */}
            <Extra></Extra>


        </div>
    );
};

export default Home;