import React from 'react'
import '../styles/global.css'
import '../styles/notFound.scss'

const NotFound = () => {
    return (
        <div className='container'>
            <div className="notFound">
                NOT FOUND
                <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1548/1548682.png" />
            </div>
        </div>
        
    );
}

export default NotFound;