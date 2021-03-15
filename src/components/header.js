import React, {Component} from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.min';




function Dropdownmenu(props) {
    return(
        <ul className="dropdown-menu">
            {props.children}    
        </ul>
    );
}
class Headermenuitem extends Component{
    constructor(props){
        super(props);
        this.class1 = 'nav-item';
        this.class2 = (this.props.active ? 'active' : '');
        this.classes=this.class1 +' '+ this.class2;
        this._childrenlist_ = this.props.children;
    }

    render(){
        this.class2 = (this.props.active ? 'active' : '');
        this.classes=this.class1 +' '+ this.class2;
        var childrenlist = null;
        var class3='nav-link';
        var submenu = null;
        if (this._childrenlist_.length > 1){
            this.classes += ' dropdown d-flex';
            class3 += ' ml-0 mr-0 w75-w100';

            childrenlist= this._childrenlist_.map((item,i) => <li key={this.props.Key + i.toString()}><a href={(item=== "Prodo EG"? "https://prodoeg.com/":"/services/" + item)} className="dropdown-item"><h4 className="text-light"> {item} </h4></a></li>);
            submenu=<Dropdownmenu>{childrenlist}</Dropdownmenu>;
        }
        const x = <li key={this.props.Key} className={this.classes}><a role="menu" href={this.props.url} onClick={this.props.onClick} className={class3}><span className="h5">{this.props.page}</span> {submenu}</a><span className="text-right d-flex d-lg-none position-absolute h5 nav-link toggledropdown" style={{right:"5px"}}> + </span>
        
        </li>;
        const y = <li key={this.props.Key} className={this.classes}><a href={this.props.url} onClick={this.props.onClick} className={class3}><span className="h5">{this.props.page}</span></a>
        </li>;
        if(this._childrenlist_.length > 1){
            return(x);
        }
        else{
            return(y);
        }
    }
}

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this._data_ = require('../shared/navigation.json');
        this._menuitemslinks_ = this._data_.urllist;
        this._menuitems_ = this._data_.headerlist;
        this._menuitemsname_ = this._menuitems_.map((item) => item.name);
        this._menuitemschildren_ =  this._menuitems_.map((item) => item.children);
        this.state={
            page:this.props.page
        };          

    }

    handleClick(i){
        this.setState(
            {page:i}
        );
    }

    render(){

        const menuitemslistitems = this._menuitemsname_;
        var active=this.state.page;
        var indexOfpage = this._menuitemsname_.indexOf(active);
        var menuJSX=menuitemslistitems.map((item,i) => <Headermenuitem key={i.toString()} Key={item} children={this._menuitemschildren_[i]} onClick={() => this.handleClick(item)} active={i===indexOfpage} page={item} url={this._menuitemslinks_[i]} />);
        
        return(
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top roboto-font-style" >
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
			        <i className="fas fa-bars fa-lg"></i>
		        </button>
		
		        <a className="navbar-brand mx-auto ml-lg-3" href="#"> <img src="https://i.ibb.co/fF7qcNG/Servqual-logo.png" alt="Servqual-logo" height="50px" />
                </a>
		        <div className="navbar-text order-lg-12">
			        <a role="button" className="btn call-icon phone-nav" href="tel:0223448544"><span className="fas fa-phone fa-lg text-mygold"></span></a>
		        </div>
		    <div id="Navbar" className="collapse navbar-collapse">
			    <ul className="navbar-nav mx-auto">
                {menuJSX}
			    </ul>
                
		    </div>
	        </nav>
            
        );
    }



}

export default NavigationBar;




