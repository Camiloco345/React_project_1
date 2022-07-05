import React, { useContext } from 'react';
import '../styles/productItem.scss'
import '../styles/global.css';
import addCart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext.js'

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext)


	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[1]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=> handleClick(product)} >
					<img src={addCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;