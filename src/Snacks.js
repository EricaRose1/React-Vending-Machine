import React from 'react';
import { Link } from 'react-router-dom';


function Snacks() {
    
    return (
        <nav className='NavBar'>
            <div className='SnackChoices' id="SnackChoices">
                <Link exact to='/Peanuts'>Peanuts</Link>
                <Link exact to='/Strawberry'>Strawberry</Link>
                <Link exact to='/Blueberry'>Blueberry</Link>
            </div>  
        </nav>
    )
}

export default Snacks;