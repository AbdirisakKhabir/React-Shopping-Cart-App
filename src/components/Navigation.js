import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { shoppingContext } from '../App';
const Navigation = () => {
	const shopping = useContext(shoppingContext)
	
	return (
		
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{shopping.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
