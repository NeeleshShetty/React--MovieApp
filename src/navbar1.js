import { Component } from 'react';

import styles from './Navnar.module.css';

class Navbar1 extends Component {
	render() {
		return (
			<>
				<div className={styles.nav}>
					<div textcolor="black">Moviecard</div>
					<div className={styles.cartIconContainer}>
						<img
							alt="Cart-icon"
							src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
							className={styles.cartIcon}
						/>
						<div
							color="yellow"
							show={true}
							className={styles.cartCount}
						>
							3
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Navbar1;
