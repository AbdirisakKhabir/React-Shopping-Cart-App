import React,{useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import { shoppingContext } from '../App';

const ShoppingCart = () => {
	const shopping = useContext(shoppingContext)
	const getCartTotal = () => {
		return shopping.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{shopping.map(item => (
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
