import React from 'react';
import Movielist from './MovieList';
import { movies } from './moviesData';

import Navbar1 from './navbar1';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: movies,
			cartCount: 0,
		};
	}

	handleIncstars = (movie) => {
		const { movies } = this.state;
		//to get the index of the movie
		const mid = movies.indexOf(movie);
		if (movies[mid].star >= 5) {
			return;
		}

		movies[mid].star += 0.5;
		this.setState({
			movies: movies,
		});
	};

	handleDecstars = (movie) => {
		const { movies } = this.state;

		const mid = movies.indexOf(movie);
		if (movies[mid].star <= 0) {
			return;
		}
		movies[mid].star -= 0.5;

		this.setState({
			movies: movies,
		});
	};

	handleFav = (movie) => {
		const { movies } = this.state;
		const mid = movies.indexOf(movie);
		movies[mid].fav = !movies[mid].fav;
		this.setState({
			movies: movies,
		});
	};

	handleCart = (movie) => {
		const { movies } = this.state;
		const mid = movies.indexOf(movie);
		console.log(mid, movies[mid].isInCart);
		movies[mid].isInCart = !movies[mid].isInCart;
		this.setState({
			movies: movies,
		});
	};
	render() {
		const { movies } = this.state;
		return (
			<>
				<Navbar1 />
				<Movielist
					movies={movies}
					addStars={this.handleIncstars}
					decStars={this.handleDecstars}
					toggleFav={this.handleFav}
					toggleCart={this.handleCart}
				/>
			</>
		);
	}
}

export default App;
