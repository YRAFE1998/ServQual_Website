import React , {Component} from 'react';
import Iframe from 'react-iframe';



class CompanyInfoBlock extends Component{
    constructor(props){
        super(props);
        this.data = this.props.data;
    }


    render(){
        const data = this.data;
        const embeddedmap = data.embeddedmap;

        return(
            <div className="container my-5 roboto-font-style">
                <div className="row">
                    <div className="col-12 col-lg-6 order-1 order-lg-0">
                        {<Map data={embeddedmap} />}
                    </div>

                    <div className="mb-5 mb-lg-0 col-12 col-lg-6 order-0 order-lg-1 text-center text-lg-left">
                        {<CompanyProfile data={data} />}
                    </div>
                </div>
            </div>
        );
    }
}

function Map(props) {
    return(
        <Iframe width={props.data.width} height={props.data.height} loading={props.data.loading} allowfullscreen src="https://maps.google.com/maps?q=SERV-QUAL&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    );
    
}

function CompanyProfile(props) {
    return(
        <>
        <h2 className="underlined-gold mb-3">
         Address
        </h2>
        <h6>{props.data.address.buildingnumber}, {props.data.address.district}</h6>
        <h6>{props.data.address.city}</h6>
        <h6>{props.data.address.state}, {props.data.address.country}</h6>
        <h6><span className="fas fa-phone fa-lg text-mygold mr-2 "></span>{props.data.phone}</h6>
        <h6><span className="fas fa-lg fa-envelope text-mygold mr-2"></span>{props.data.email}</h6>
        <hr />
        
        <h2 className="underlined-gold mb-3">
         Social Media
        </h2>
        <h6><span className="fab fa-facebook-square fa-lg text-mygold mr-2 "></span> <a href={props.data.facebook}>{props.data.facebook}</a></h6>
        <h6><span className="fab fa-lg fa-instagram text-mygold mr-2"></span><a href={props.data.instagram}>{props.data.instagram}</a></h6>
        <h6><span className="fab fa-youtube fa-lg text-mygold mr-2"> </span><a href={props.data.youtube}>{props.data.youtube}</a></h6>
        
        </>
    );
    
}
export default CompanyInfoBlock;