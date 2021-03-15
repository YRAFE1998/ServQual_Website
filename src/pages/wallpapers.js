import React, {Component} from 'react';
import ServicePage from "./servicepage.js";


class WallPapersPage extends Component{
    constructor(props){
        super(props);
        
        this._menuitemslinks_ = this.props.urllist;
        this._menuitems_ = this.props.headerlist;
        this.name = this._menuitems_[4];
        this.path = this._menuitemslinks_[4];
    }

    render(){
        const page = <ServicePage servicename="Wallpaper" page={"Wallpaper"}/>
        return (
            <> {page}</>
            
        );
    }
}


export default WallPapersPage;