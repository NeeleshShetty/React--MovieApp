import {Component} from 'react';

class Navbar extends Component {
	render() {
		return (
			<>
			<div style={style.nav}>
				<div style={style.title}>Moviecard</div>
				<div style={style.cartIconContainer}>
				<img alt="Cart-icon" style={style.cartIcon}/>
				<span style={style.cartCount}>0</span>
				</div>
			</div>
			</>
		)
	}
	
}
export default Navbar;

const style={
	cartIcon: {
		height: 48,
		marginRight: 20,
	  },
	  nav: {
		height: 70,
		background: "#4267b2",
		display: "flex",
		justifyContent: "space-between" ,
		alignItems: "center",
		position: "relative",
	  },
	  title:{
		fontSize: 30,
		color: "#fff",
		fontWeight: 600,
		fontFamily: '"Montserrat", sans-serif',
		textTransform: "uppercase",
		marginLeft: 20
	  },
	  
	  cartIconContainer: {
		position: "relative",
		cursor: "pointer",
	  },
	  cartCount: {
		background: "orange",
		borderRadius: "50%",
		padding: "4px 8px",
		position: "absolute",
		right: 10,
		top: -5,
		fontSize: 12,
	  },
}