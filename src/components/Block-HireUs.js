import React, {Component} from 'react';

class BlockHireUs extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="HireUs" className="container-fluid mt-5 hire-us-template background-fixed">
            <div className="container roboto-font-style">
    
                <div className="row text-white text-center align-items-center">
                    <div className="col-8 col-md-4 offset-md-4 offset-2 pt-5">
                        <h1 className="oswald-font-style underlined-gold">Hire Us</h1>
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        <h4 style={{display: "inline"}}>Contact us through phone &nbsp;</h4>
                        <h4 style={{display: "inline"}}><span className="fas fa-phone h4" style={{display: "inline"}}></span><a role="button" href="tel:0223448544"> 02 23448544</a></h4>
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        <h4 style={{display: "inline"}}>Or through Email &nbsp;</h4>
                        <h4 style={{display:"inline"}}><span className="h4 fas fa-envelope" style={{display: "inline"}}> </span><a href="mailto:production@sq-is.com"> production@sq-is.com</a></h4>
                    </div>
                    <div className="col-12 text-center pt-5"><h4>Or simply fill the form below</h4></div>
                </div>
                <form>
    
                    <div className="row pb-5 pt-2 text-white roboto-font-style">
    
                        <div className="col-12 col-md-6 form-group">
                            <label htmlFor="InputName">Name</label>
                            <input type="text" name="name" className="form-control" id="InputName" placeholder="Full Name" />
    
                        </div>
    
                        <div className="col-12 col-md-6 form-group">
                            <label htmlFor="InputEmail">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" placeholder="Enter email" />
                            <small id="emailwarning" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="col-12 col-md-6 form-group">
                            <label htmlFor="InputPhoneNumber">Phone Number</label>
                            <input type="tel" className="form-control" id="InputPhoneNumber" placeholder="ex. 010 0000 0000" />
                        </div>
                        <div className="col-12 col-md-6 form-group">
                            <label htmlFor="InputCompany">Company (optional)</label>
                            <input type="text" className="form-control" id="InputCompany" placeholder="Company Name" />
                        </div>
                        <div className="col-12">
                            
                            <div className="form-group">
                                <label htmlFor="MessageTextArea">Message</label>
                                <textarea className="form-control" id="MessageTextArea" rows="3"></textarea>
                            </div>
    
                        </div>
                        <div className="col-12 text-center text-md-right">
                            <button type="submit" className="btn btn-outline-light">Submit</button>
                        </div>
    
                    </div>
                </form>
            </div>
    
        </div>
    
    
        );
    }
}

export default BlockHireUs;