import React from 'react';
import PeanutImg from "./Images/Peanuts.png";

function Peanuts() {
    return (
        <div>
            <h1>Here are your Peanuts</h1>
            <img src={PeanutImg}
                alt='Photo of jar of Peanutbutter'
            />
            <p>Yummy!</p>
        </div>
    );
}

export default Peanuts;