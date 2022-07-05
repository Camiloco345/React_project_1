import React from 'react';
import ProductItem from '../components/productItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProduct';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products  = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id}  />
				))}
			</div>
		</section>
	);
}

export default ProductList;