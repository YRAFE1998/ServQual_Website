import React,{Component} from 'react';

class ErrorPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row mt-5 align-items-start d-flex" style={{height:"60vh"}}>
                    <div className="col-12 col-md-6">
                        <h2 className="oswald-font-style">Page Not Found</h2>
                        <p className="ml-5"><a href="/">Go Back to Home page -> </a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;