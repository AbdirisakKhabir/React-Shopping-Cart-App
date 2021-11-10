import React, {useContext} from 'react';
import { shoppingContext } from '../App';
const Item = () => {
	const shopping = useContext(shoppingContext)
	return (
		<div className="shopping-cart_item">
			<img src={shopping.image} alt={`${shopping.title} book`} />


			<div>
				<h1>{shopping.title}</h1>
				<p>$ {shopping.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
