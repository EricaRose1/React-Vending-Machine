import React from 'react';
import Violet from './Images/Blueberry.png'


function Blueberry() {
    return (
        <div>
            <h1>Yummy Blueberry Snacks</h1>
            <img src={Violet}
                alt='Violet From WillyWonka' />
            {/* <iframe src="https://giphy.com/embed/LwrXP9AeKFzWg" width="480" height="480" frameBorder="0" class="giphy-embed"></iframe> */}
            <p>After Eating a bunch of blueberries!</p>

        </div>
    );
}

export default Blueberry;