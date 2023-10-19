import React from 'react'

import { MdFlightTakeoff } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <div className='header__logo'>
            <Link to='/'>
                <em><MdFlightTakeoff/></em>
                <span>travel youtube</span>
            </Link>
        </div>
    )
}

export default Logo