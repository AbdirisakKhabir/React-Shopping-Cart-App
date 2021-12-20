import React,{ useContext } from 'react';
import { shoppingContext } from '../App';


const Product = () => {
	
const shopping = useContext(shoppingContext)

console.log("MyShopping",shopping)
	return (
	
		<div className="product">
		

			
						
				<img src={shopping.image} alt={`${shopping.products.title} book`} />

					<h1 className="title">{shopping.products.title}</h1>

					<p className="price">${shopping.products.price}</p>

					<button onClick={() => shopping.products.product.addItem(shopping.products.product)}>
					Add to cart
						</button>
					
						
					
		

				
		</div>
			
		
		
	);
};

export default Product;
