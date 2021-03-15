import React, {Component} from 'react';
import PageTitle from "../components/Block-pagetitle.js";
import BlockAboutUs from '../components/Block-aboutus.js';
import NavigationBar from '../components/header.js';


class AboutusPage extends Component{
    constructor(props){
        super(props);
        this.data = require("../shared/pages.json");
        this.servicepagedata = this.data.aboutus;

        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[1];
        this.path = this._menuitemslinks_[1];
    }

    render(){
        const name = this.name;
        const header = <NavigationBar page={name}/>
        const title = <PageTitle name={this.name} urllist={this._menuitemslinks_} headerlist={this._menuitems_}/>;
        const blocks = <BlockAboutUs simp={false} data={this.servicepagedata}/>
        return (
            <> {header}{title} {blocks}</>
            
        );
    }
}

export default AboutusPage;
