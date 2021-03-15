import React, {Component} from 'react';
import NavigationBar from '../components/header.js';
import ServicePage from "./servicepage.js";


class ServicesPage extends Component{
    constructor(props){
        super(props);
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[3];
    }

    render(){
        const page = <ServicePage servicename="Services" page={this.name} />
        return (
            <> {page}</>
            
        );
    }
}


export default ServicesPage;