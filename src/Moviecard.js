import React from 'react';

class Moviecard extends React.Component {
	render() {
		const {addStars,minusStars,favourite,movies,togcart} = this.props;
		
		const { title, plot, price, rating, star,fav,isInCart } = this.props.movies;
		return (
			<div className="main">
				<div className="movie-card">
					<div className="left"></div>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O79ABq3i-XUIcQvlD8D3g5gHbHEuFrWolp9gpVDz&s"
						alt="Poster"
					/>

					<div className="right">
						<div className="title">{title}</div>
						<div className="plot">{plot}</div>
						<div className="price">RS.{price}</div>

						<div className="footer">
							<div className="rating">{rating}</div>
							<div className="star-dis">
								<img
									alt="minus"
									className="str-btn"
									src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
									onClick={() => { minusStars(movies) }}
								/>
								&emsp;
								<img
									alt="stars"
									className="stars"
									src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
								/>
								&emsp;
								<img
									alt="plus"
									className="str-btn"
									src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
									onClick={()=>{addStars(movies)}}
								/>
								&emsp;
								<span className="starCount">{star}</span>
							</div>
							{/* {fav? <button className="unfavourite-btn" onClick={this.handlefav}>Un-favourite</button> : 
							<button className="favourite-btn" onClick={this.handlefav}>Favourite</button> } */}
							
							<button className={fav?"unfavourite-btn": "favourite-btn" } onClick={()=>{favourite(movies)}}>{fav?"unfavourite": "favourite" } </button>

							<button className={isInCart?"cart-btn":"remove-cart-btn" } onClick={()=>{togcart(movies)}}>{isInCart?"cart":"remove-cart" }</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Moviecard;
