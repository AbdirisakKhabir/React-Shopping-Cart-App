import React, {useContext} from 'react';
import { shoppingContext } from '../App';
// Components
import Product from './Product';


const Products = () => {
	const shopping = useContext(shoppingContext)
	
	return (
		<div className="products-container">
			{/* {shopping.map(product => (
				
				<Product
					key={product.id}
					product={product}
					addItem={shopping.addItem}
				/>
				
			))} */}
			<Product />
		</div>
	);
};

export default Products;
