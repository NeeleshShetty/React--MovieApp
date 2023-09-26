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
        
		return(
            <>
             <Moviecard movies={this.state}  />
            
            </>
           

        )
    }
}

export default Movielist;
