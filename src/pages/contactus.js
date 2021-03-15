import React, {Component} from 'react';
import PageTitle from '../components/Block-pagetitle.js';
import NavigationBar from '../components/header.js';
import CompanyInfoBlock from '../components/Block-company-info';
import BlockHireUs from '../components/Block-HireUs.js';

class ContactusPage extends Component{
    constructor(props){
        super(props);
        this.data = require("../shared/pages.json");
        this.contactusPagedata = this.data.contactus;
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[6];
        this.path = this._menuitemslinks_[6];
    }

    render(){
        
        const name = this.name;
        const header = <NavigationBar page={name}/>
        const title = <PageTitle name={name} urllist={this._menuitemslinks_} headerlist={this._menuitems_}/>;
        const info =<CompanyInfoBlock data = {this.contactusPagedata} />;
        const hireus = <BlockHireUs />
        return (
            <>{header} {title} {info} {hireus}</>
            
        );
    }
}


export default ContactusPage;