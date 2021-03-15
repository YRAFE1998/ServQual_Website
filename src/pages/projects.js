import React, {Component} from 'react';
import ServicePage from "./servicepage.js";

class ProjectsPage extends Component{
    constructor(props){
        super(props);
        
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[2];
        this.path = this._menuitemslinks_[2];
    }

    render(){
        const page = <ServicePage servicename="Full Projects" page={"Full Projects"}/>
        return (
            <> {page}</>
            
        );
    }
}


export default ProjectsPage;