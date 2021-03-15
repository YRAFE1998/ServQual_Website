import React, {Component} from 'react';

class ClientsSimp extends Component{
    constructor(props){
        super(props);
		const data = this.props.data.clients;
		this.name= data.name;
		this.clientslisticons = data.clientslisticons;
        this.description = data.description;
        this.alt = data.alt;


    }

    render(){

        const name = this.name;
        const clientslisticons = this.clientslisticons;
        const description = this.description;
        const alt = this.alt;
        const icons = clientslisticons.map((item,i) => 
        <div key={item+i.toString()} className="col-6 col-sm-3 p-4">
        <img className="icon p-0 client-logo" src={item} alt={alt[i]} />
        </div>
        );
        return(
            <div className="container my-5" id="clients">
            <div className="row">
                <div className="section-title col-md-4 col-8 offset-2 offset-md-4 text-center">
                    <h2 className="oswald-font-style">{name}</h2>
                </div>
                <div className="col-12 section-content mb-0 text-center">
                    <p className="text-dark">
                        {description}
                    </p>
                </div>
            </div>
            <div className="row align-items-center my-5 text-center">
                {icons}
            </div>
        </div>

        );
    }
}

export default ClientsSimp;