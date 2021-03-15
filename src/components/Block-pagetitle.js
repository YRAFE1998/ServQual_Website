import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

class AboutUsbuttonrender extends Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
				<button id="aboutusbuttonheader" role="button" className="btn btn-outline-light btn-lg" style={{fontWeight: 'bold',borderStyle:'solid',borderWidth:2}}>
					About Us
				</button>
        );
    }

}

class GetAQuoteButtonrender extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button id="getaquotebuttonheader" role="button" className="btn btn-outline-light btn-lg" style={{fontWeight: 'bold',borderStyle:'solid',borderWidth:2}}>
				Get A Quote
			</button>
        );
}
}

class PageTitleHomeButtonsrender extends Component{
    constructor(props){
    super(props);
    }
    render(){
        const aboutus = <AboutUsbuttonrender />;
        const getaquote = <GetAQuoteButtonrender />;
        return(
            <>
            <div className="col-6 offset-0 offset-md-3 col-md-3 text-center text-md-right mt-3 mt-md-1 align-self-center" style={{fontFamily: 'Roboto Condensed'}}>
                {getaquote}
            </div>
            <div className="col-6 col-md-3 text-center text-md-left mt-3 mt-md-1 align-self-center" style={{fontFamily: 'Roboto Condensed'}}>
                {aboutus}
            </div>
            </>
        );
}
}

class PageTitle extends Component{
    constructor(props){
        super(props);
        this._data_ = require('../shared/navigation.json');
        this._page_ = props.name;
        this._menuitems_ = this.props.headerlist;
        this._Sloganlist_ = this._data_.pagetitlelist;
        this._imagelist_ = this._data_.headerimage;
    }

    render(){
        var index = this._menuitems_.indexOf(this._page_);

        const Slogan =this._Sloganlist_[index];
        const homebuttonsrender = (index===0 ? <PageTitleHomeButtonsrender />: null);
        var classes = "col-12 text-center text-white";
        classes += (index === 0 ? " align-self-end" : " align-self-center");
        const backgroundImage = 'linear-gradient(0deg, rgba(57, 57, 57, 0.6), rgba(57, 57, 57, 0.6)) , url("' + this._imagelist_[index] + '")'
        const mystyle = {
            background: backgroundImage , 
            backgroundSize: "cover",
            borderRadius: 0,
            backgroundAttachment: 'fixed'

        };
        return(
            <header className="jumbotron header-index background-fixed" style={mystyle}>
    	    	<div className="container">
    		    	<div className="row row-header-page">
	    	    		<div className={classes}>
		    		    	<h1 className="header-font-style roboto-font-style">{Slogan}</h1>
			        	</div>
                    {homebuttonsrender}
    	    	</div>
                </div>
        	</header>
        );
    }
}


export default PageTitle;