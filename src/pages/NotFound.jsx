import React from 'react'
import '../styles/global.css'
import '../styles/notFound.scss'

const NotFound = () => {
    return (
        <div className='container'>
            <div className="notFound">
                NOT FOUND
                <img className="ico" src="../assets/icons/error-404.png" />
            </div>
        </div>
        
    );
}

export default NotFound;