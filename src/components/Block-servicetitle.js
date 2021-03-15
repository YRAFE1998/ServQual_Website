import React, {Component} from 'react';

class ServiceTitle extends Component{
    constructor(props){
        super(props);
        this._slogan_ = props.Slogan;
        this.background = props.img;
    }

    render(){

        const classesjumbo = 'jumbotron header-index';
        const classes = 'row row-header-page';
        const backgroundImage = 'linear-gradient(0deg, rgba(57, 57, 57, 0.6), rgba(57, 57, 57, 0.6)) , url("' + this.background + '")'
        const mystyle = {
            background: backgroundImage , 
            backgroundSize: "cover",
            borderRadius:0,
            backgroundAttachment: 'fixed'

        };
        return(
            <header className={classesjumbo} style={mystyle}>
    	    	<div className="container">
    		    	<div className={classes}>
	    	    		<div className="col-12 text-center text-white align-self-center">
		    		    	<h1 className="header-font-style roboto-font-style">{this._slogan_}</h1>
			        	</div>
		        	</div>
    	    	</div>
        	</header>
        );

    }
}




export default ServiceTitle;