import {Component} from 'react';
import styled from 'styled-components';

const Nav = styled.div`
        height: 70;
		background: #4267b2;
		display:flex;
		justify-content: space-between ;
		align-items: center;
		position: relative,
`
const Title = styled.div`
fontSize: 50px;
		color: #fff;
		fontWeight: 600;
		fontFamily: Montserrat, sans-serif;
		textTransform: uppercase;
		marginLeft: 20;
		&:hover{
			color:green;
			width:60px;
		}
`
const Cartcount = styled.div`
background: ${(props) => props.color};
		borderRadius: 50%;
		padding: 4px 8px;
		position: absolute;
		right: 10;
		top: -5;
		fontSize: 12;
		visibility:${(props) => props.show?"visible" : "hidden"};
` 
class Navbar extends Component {
	render() {
		return (
			<>
			<Nav>
				<Title>Moviecard</Title>
				<div style={style.cartIconContainer}>
				<img alt="Cart-icon" src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"  style={style.cartIcon}/>
				<Cartcount color="yellow" show={true}>3</Cartcount>
				</div>
			</Nav>
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