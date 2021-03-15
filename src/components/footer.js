import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            
	<footer className="footer background-sqdark text-white pt-4">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-4 text-center text-md-left mt-5 mt-md-1">
                    <img src="/assets/images/footer-logo.png" width="70%" alt="SQ-Logo" border="0" />
                </div>

                <div className="col-12 col-md-4 text-md-left text-center mt-5 mt-md-1">
                    <h5 className="underlined-gold">Contact Us</h5>
                    <address>
                        61, El Yasmeen 4<br/>
                        First Settlement, New Cairo<br/>
                        Cairo. Egypt<br/>

                        <span className="fas fa-phone"><a role="button" href="tel:0223448544"> 02 23448544</a></span>
                        <br/>
                        <span className="fas fa-envelope"> <a href="mailto:production@sq-is.com"> production@sq-is.com</a></span>
                    </address>
                </div>

                <div className="col-12 col-md-4 text-center mt-5 mt-md-1" style={{height: "100%"}}>
                    <h5 className="underlined-gold">
                        Social Media
                    </h5>
                    <div className="mt-md-5 mt-3">
                        <a href="http://www.facebook.com/ServQualeg"><h4 className="socia-media-icons"><i className="fab fa-facebook-square fa-lg"></i></h4></a>
                        <a href="https://www.instagram.com/serv_qualeg/"><h4 className="socia-media-icons"><i className="fab fa-lg fa-instagram"></i></h4> </a>
                        <a href="https://www.youtube.com/channel/UC9C0z4rxpCEjBuZEE_gercA"><h4 className="socia-media-icons"><i className="fab fa-youtube fa-lg"></i></h4></a>
                        <a href="mailto:production@sq-is.com"><h4 className="socia-media-icons"><i className="fas fa-lg fa-envelope"></i></h4></a>
                    </div>
                </div>
                <div className="col-12 mt-5 mt-md-5 text-center">
                    <p>© Copyright 2021 ServQual</p>
                </div>
            </div>
        </div>
    </footer>
        );
    }

}

export default Footer;