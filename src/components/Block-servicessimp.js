import React, {Component} from 'react';


class Servicesection extends Component{
    constructor(props){
        super(props);
        this.data= this.props.data.services;
    }

    render(){
        const data = this.data;
        const servicelist = data.servicelist;
        const services = servicelist.map((item,i)=> 
            <Serviceparent key={item+i.toString()} name={item} icon = {data.servicesicons[i]}>
                <p>{data.descriptionlist[i]}</p>
            </Serviceparent>
        )
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-0 col-xl-1"></div>
                {services}
                </div>
            </div>
        );
    }
}


function Serviceparent(props) {
    const name = props.name;
    const icon = props.icon;

    return(
        <div className="col-12 col-sm-6 col-xl-2 text-center" >
            <div className="px-2" style={{borderRadius:"10px"}}>
                <div className="serviceicon position-relative bg-white" style={{height:"150px"}}>
                    <img style={{height:"100%"}} src={icon} />
                </div>
                <div className="oswald-font-style position-relative" style={{top:"-30px"}}>
                    <h4>{props.name}</h4>
                </div>
                <div className="position-relative" style={{top:"-20px"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
    
}

export default Servicesection;