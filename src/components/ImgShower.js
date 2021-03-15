import React, {Component} from 'react';


class ShowImg extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const closebutton = this.props.closeonClick;
        const src = this.props.src;
        return(
        <div className="Imageshower">
            <div className="container-fluid mt-5">
                <div className="row">
                <div className="offset-9 col-3 text-center Imageshowerclosebutton" style={{cursor:"pointer"}} onClick={function onClick(e) {
                    e.preventDefault();
                    closebutton(src);
                }
                }
                >
                <i className="far fa-window-close h3"></i>
                </div>

                    <div className="col-lg-8 col-12 mt-5" style={{height:"70vh"}}>
                        <img style={{height:"100%",width:"100%",objectFit:"contain"}} src={this.props.src}/>
                    </div>
                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-start text-center">
                        <h1 className="section-title roboto-font-style"> {this.props.alttext} </h1>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ShowImg;