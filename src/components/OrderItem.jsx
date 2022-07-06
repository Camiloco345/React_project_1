import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItems.scss';
import '../styles/global.css'
import close from '@icons/icon_close.png'

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	const handleRemove = (products) =>{
		removeFromCart(product)
	}

	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[1]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={handleRemove(product)} />
		</div>
	);
}

export default OrderItem;