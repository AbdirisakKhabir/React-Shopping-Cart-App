import React,{useContext} from 'react';
import { shoppingContext } from '../App';
const Product = () => {
	
const shopping = useContext(shoppingContext)

console.log(shopping)
	return (
		<div className="product">
			<img src={shopping.image} alt={`${shopping.title} book`} />

			<h1 className="title">{shopping.title}</h1>

			<p className="price">${shopping.price}</p>

			<button onClick={() => shopping.product.addItem(shopping.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
