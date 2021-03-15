import React, {Component} from 'react';
import BootstrapCarousel from './BootstrapCarousel.js';

class BlockLeftDescriptionGraphicSingle extends Component{

    constructor(props){
        super(props);

        this.CarouselData = props.data;
        this.descriptiondata = props.descriptiondata;
        this.option = this.props.option;       


    }
    
    render(){
        const option = this.option;
        var classoption1 = "container-fluid bg-light py-3";
        var classoption2 = "container-fluid py-3";
        var classoption = (option%2 === 0 ?classoption2:classoption1);
        const descriptiondata = this.descriptiondata;
        const carouseldata = this.CarouselData;
        const carousel = <BootstrapCarousel data={carouseldata} />;
        const list = descriptiondata.servicelist;
        var listItemsproperly;
        var classes = "col-12 col-lg-6";
        if(list.length > 0)  listItemsproperly = <ListItemsproperly list = {list} />;
        else classes = "col-12";
        return(
        <div className={classoption}>
            <div className="container">
                <div className="row my-3">
                    <div className={classes}>
                        <div className="row px-3 mb-3 mb-lg-0">
                            <div className="col-12 section-title oswald-font-style text-center">
                                <h2> {descriptiondata.name} </h2>
                            </div>
                            <div className="col-12 roboto-font-style mt-3">
                                <ListItemsproperly list = {descriptiondata.servicelist}/>
                            </div>
                        </div>    
                    </div>
                    <div className={classes}>
                        <div className="row ">
                            {carousel}

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }



}

function ListItemsproperly(props) {
    const content = props.list.map((item) =>
        <li>{item}</li>
    )
    return(
        <ol className="h5">
            {content}
        </ol>
    );
}

export default BlockLeftDescriptionGraphicSingle;