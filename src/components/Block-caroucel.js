import React, {Component} from 'react';
import Flickity  from 'react-flickity-component'

class CarouselBlock extends Component{
    constructor(props){
        super(props);
        const data = this.props.data;
        this.imagelist = data.imagelist;
        this.titlelist = data.servicelist;
        this.descriptionlist = data.descriptionlist;
    }


    render(){
        const imagelist = this.imagelist;
        const titlelist = this.titlelist;
        const descriptionlist = this.descriptionlist;
        const flickityOptions = {
            cellAlign: 'left',
			contain: true,
			wrapAround: false,
			autoPlay: true,
        }
        
        const carouselitems = imagelist.map((item,i) => 
        <Carouselitem image={item} title={titlelist[i]} description={descriptionlist[i]} />
        );
        return(
            <Flickity
            className={'main-carousel background-blueprint'}
            elementType={'div'}
            options={flickityOptions} 
            >
            {carouselitems}
            </Flickity>
            

        );
    }
} 

function Carouselitem(props) {
    return(
        <div className="carousel-cell mx-2 mb-5">	
			<div className="hundredx75vh">
				<img src={props.image} />
				<div className="text-left text-light carousel-description-container">
					<div className="row thinscroll" style={{height:"100%",overflow:"auto"}}>
						<div className="container-fluid">
							<div className="col-12 roboto-font-style">
								<h3 className="underlined-gold" style={{marginBottom: "10px"}}>{props.title}</h3>
							</div>
							<div className="col-12">
								<p>{props.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
    
}

export default CarouselBlock;