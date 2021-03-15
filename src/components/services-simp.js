import React , {Component} from 'react';

class ServicesSimp extends Component{
    constructor(props){
        super(props);
		const data = this.props.data.services;
		this.name= data.name;
		this.servicesicons = data.servicesicons;
		this.serviceslist = data.servicelist;
		this.links = data.links;
		this.description = data.description;
		

    }

    render(){
		const serviceicons = this.servicesicons;
		const description = this.description;
		const servicelist = this.serviceslist;
		const links = this.links;
		const name = this.name;
		const services = servicelist.map((item,i) =><div className="col-6 col-sm-3 text-center text-muted py-5"><a className="canceled" href={links[i]}><h2><img className="icon" src={serviceicons[i]} /></h2><h5 className="oswald-font-style"> {item}</h5></a></div>
		);
        return(
            <div className="container mt-5" id="ourservices">
		        <div className="row">
			        <div className="section-title col-md-4 col-8 offset-2 offset-md-4 text-center">
				        <h2 className="oswald-font-style">{name}</h2>
			        </div>

        			<div className="col-12 section-content mb-0">
        				<p className="text-dark">{description}</p>
        			</div>

        			{services}
        		</div>
        	</div>
        );
    }
}


export default ServicesSimp;