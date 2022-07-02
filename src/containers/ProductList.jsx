import React, {useState, useEffect} from 'react';
import '../styles/global.css';
import '../styles/productList.scss';
import Home from '../pages/Home.jsx'
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    
    const [item, setItem] = useState([]);

    useEffect( async()=>{
        const response = await axios(API);
        setItem(response.data); 
    },[])

    return (
        <section>
            <div>
                {
                    item.map(product => (
                        <Home></Home>         
                    ))
                }
            </div>
        </section>
    );
}

export default ProductList;