import {Component} from 'react';
import Moviecard from './Moviecard';

class Movielist extends Component {
    constructor(){
        super();
        this.state={
            title: 'The Avengers',
			plot: 'Super Hero Movie',
			price: 100,
			rating: 8.9,
			stars: 0,
			fav:false,
			cart:true
        }
    }
	
	render() {
        const {title,plot,price,rating,stars,fav,cart} = this.state;
		return(
            <>
             <Moviecard title={title} plot={plot}
             price={price} rating={rating} stars={stars}
             fav={fav} cart={cart}  />
            
            </>
           

        )
    }
}

export default Movielist;
