import React from 'react';
import StrawberryImg from "./Images/Strawberry.jpg"

function Strawberry() {
    return (
        <div>
            <h1>Healthy Strawberry Snacks</h1>
            <img src={StrawberryImg}
                alt='One strawberry image'
            />
            <p>So Good!</p>
        </div>
    );
}

export default Strawberry;