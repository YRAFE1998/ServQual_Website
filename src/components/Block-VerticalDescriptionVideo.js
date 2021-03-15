import React, {Component} from 'react';
import CarouselBlock from './Block-caroucel.js';
class BlockVerticalDescriptionVideo extends Component{
    constructor(props){
        super(props);
        this.carouseldata = this.props.carouseldata;
    }

    render(){
        var carouseldata = this.carouseldata;

        return(
            <CarouselBlock data={carouseldata} />
        );
    }
}
export default BlockVerticalDescriptionVideo