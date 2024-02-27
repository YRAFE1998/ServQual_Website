import React, {Component} from 'react';
import ServiceTitle from '../components/Block-servicetitle.js';
import BlockLeftDescriptionGraphicSingle from '../components/Block-LeftDescriptionWGraphicSingle';
import NavigationBar from '../components/header.js';
import axios from 'axios';

class ServicePage extends Component{
    constructor(props){
        super(props);
        this._data_ = require("../shared/services.json");
        this._servicename_ = props.servicename;
        this._list_ = this._data_[this._servicename_];
        this._backgroundImages_ = this._data_.backgroundImage;
        this.backgroundimage = this._backgroundImages_[this._servicename_];
        this.carouseldata= this._list_.map((item) => 
            item.carouseldata
        );

        
    }

    render(){
        const header = <NavigationBar page={this.props.page}/>

        const list = this._list_;

        const title = <ServiceTitle Slogan={this._servicename_} img={this.backgroundimage}/>;
        const content = list.map((item,i) => 
        <>
        <BlockLeftDescriptionGraphicSingle
        data={this.carouseldata[i]}
        descriptiondata={item}
        option={i}
        >
        {item.detaileddescription}
        </BlockLeftDescriptionGraphicSingle>
        </>
        );
        return(
            <> {header}{title} {content}</>
        );
        

    }
}

export default ServicePage;