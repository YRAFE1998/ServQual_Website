import React, {Component} from 'react';
import PageTitle from "../components/Block-pagetitle.js";
import BlockAboutUs from '../components/Block-aboutus.js';
import NavigationBar from '../components/header.js';
import ClientsSimp from '../components/clients-simp';
import BlockHireUs from '../components/Block-HireUs.js';
import Servicesection from '../components/Block-servicessimp';



class HomePage extends Component{
    constructor(props){
        super(props);
        this.data = require("../shared/pages.json");
        this.homepagedata = this.data.home;
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[0];
        this.path = this._menuitemslinks_[0];
    }

    render(){
        const name = this.name;
        const data = this.homepagedata;

        const header = <NavigationBar page={name}/>
        const title = <PageTitle name={name} urllist={this._menuitemslinks_} headerlist={this._menuitems_}/>;
        const blocks = <BlockAboutUs simp={true}  data={data}/>;
        const services = <Servicesection data = {data} />;
        const clients = <ClientsSimp data={data} />;
        const hireUs = <BlockHireUs/>;
        return (
            <> 
            {header}
            {title}
            {services}
            {blocks}
            {clients}
            {hireUs}
             </>
            
        );
    }
}


export default HomePage;