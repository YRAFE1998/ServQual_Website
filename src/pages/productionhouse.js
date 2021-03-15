import React, {Component} from 'react';
import ServicePage from "./servicepage.js";



class ProductionHousePage extends Component{
    constructor(props){
        super(props);
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[5];
        this.path = this._menuitemslinks_[5];

    }

    render(){
        const page = <ServicePage servicename="Production House" page={"Production House"}/>
        return (
            <> {page}</>
            
        );
    }
}



export default ProductionHousePage;