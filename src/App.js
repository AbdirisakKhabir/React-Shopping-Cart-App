import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const shoppingContext = createContext()


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([products]);
	
	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<div className="App">
			<shoppingContext.Provider value={cart}>
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products  addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</shoppingContext.Provider>
		</div>
	);
}

export default App;
