import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        const drupalService = props.drupalService;
        this.state = {
            data: []
        }
        drupalService.getFooterBlock()
            .then(res => {
                let responseData = res.data;
                console.log("Response Data:- ", responseData)
                this.setState({
                    data: responseData
                });
            });

    }

    render() {
        let data = this.state.data;
        return (

            <footer className="footer background-sqdark text-white pt-4">
                {data.length > 0 &&
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-4 text-center text-md-left mt-5 mt-md-1">
                                <img src={data[0].field_big_logo[0].url} width="70%" alt="SQ-Logo" border="0" />
                            </div>

                            <div className="col-12 col-md-4 text-md-left text-center mt-5 mt-md-1">
                                <h5 className="underlined-gold">Contact Us</h5>
                                <address>
                                    {data[0].field_street_address[0].value}<br />
                                    {data[0].field_city[0].value}<br />
                                    {data[0].field_city_country[0].value}<br />

                                    <span className="fas fa-phone"><a role="button" href={"tel:" + data[0].field_telephone_number[0].value}> {data[0].field_telephone_number[0].value}</a></span>
                                    <br />
                                    <span className="fas fa-envelope"> <a href={"mailto:" + data[0].field_info_email[0].uri }> {data[0].field_info_email[0].uri}</a></span>
                                </address>
                            </div>

                            <div className="col-12 col-md-4 text-center mt-5 mt-md-1" style={{ height: "100%" }}>
                                <h5 className="underlined-gold">
                                    Social Media
                                </h5>
                                <div className="mt-md-5 mt-3">
                                    <a href={data[0].field_facebook_link_url[0].uri}><h4 className="socia-media-icons"><i className="fab fa-facebook-square fa-lg"></i></h4></a>
                                    <a href={data[0].field_instagram_link_url[0].uri}><h4 className="socia-media-icons"><i className="fab fa-lg fa-instagram"></i></h4> </a>
                                    <a href={data[0].field_youtube_link_url[0].uri}><h4 className="socia-media-icons"><i className="fab fa-youtube fa-lg"></i></h4></a>
                                    <a href={"mailto:" +  data[0].field_info_email[0].uri}><h4 className="socia-media-icons"><i className="fas fa-lg fa-envelope"></i></h4></a>
                                </div>
                            </div>
                            <div className="col-12 mt-5 mt-md-5 text-center">
                                <p>© Copyright 2021 ServQual</p>
                            </div>
                        </div>
                    </div>
                }
            </footer>
        );
    }

}

export default Footer;