import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const shoppingContext = createContext();
export const cartsContext = createContext()

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	
	const addItem = item => {
		if(!cart.find(cardItem => cardItem.id === item.id)){
            setCart([...cart, item])
        }
	};

	return (
		<div className="App">
			<shoppingContext.Provider value={{products, addItem}}>
				<cartsContext.Provider value={cart}>
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products   />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</cartsContext.Provider>
			</shoppingContext.Provider>
			
		</div>
	);
}

export default App;
