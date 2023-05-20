import React from 'react';
import VendingImg from "./Images/VendingMachine.jpg";

function VendingMachine() {
    return (
        <div>
            <h1>Choose a Snack from the Vending Machine</h1>
            <img 
                src={VendingImg}
                alt='image of a vending machine'
            />
        </div>
    );
}

export default VendingMachine;