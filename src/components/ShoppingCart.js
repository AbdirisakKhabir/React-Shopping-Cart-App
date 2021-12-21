import React,{useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import { cartsContext } from '../App';

 	const ShoppingCart = () => {
	const carts = useContext(cartsContext)
	console.log(carts)

	const getCartTotal = () => {
		return carts.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{carts.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
