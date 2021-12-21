import React,{ useContext } from 'react';
import { shoppingContext } from '../App';


const Product = () => {
	
const shopping = useContext(shoppingContext)

console.log("MyShopping",shopping)
	return (
	
		<div className="product">
		
  {shopping.products.map(oneProduct => (
	  <div>
	<img src={oneProduct.image} alt={`${oneProduct.title} book`} />

<h1 className="title">{oneProduct.title}</h1>

<p className="price">${oneProduct.price}</p>

<button onClick={() => oneProduct.addItem(oneProduct.product)}>
Add to cart
	</button>
	</div>
  ))}
			
						
				
					
						
					
		

				
		</div>
			
		
		
	);
};

export default Product;
