import React, {useContext} from 'react';
import { shoppingContext } from '../App';
// Components
import Product from './Product';


const Products = props => {
	const shopping = useContext(shoppingContext)
	
	return (
		<div className="products-container">
			{shopping.map(product => (
				
				<Product
					key={product.id}
					product={product}
					addItem={shopping.addItem}
				/>
				
			))}
		</div>
	);
};

export default Products;
