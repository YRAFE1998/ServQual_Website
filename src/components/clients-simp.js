import React, { Component } from 'react';

class ClientsSimp extends Component {
    constructor(props) {
        super(props);
        const data = this.props.data.clients;
        this.name = data.name;
        this.clientslisticons = data.clientslisticons;
        this.description = data.description;
        this.alt = data.alt;
        const drupalService = props.drupalService;
        this.state = {
            data: []
        }
        drupalService.getClientsBlock()
            .then(res => {
                let responseData = res.data;
                this.setState({
                    data: responseData
                });
            });


    }

    render() {
        let data = null;
        let icons = null
        if (!!this.state.data.length) {
            data = this.state.data[0];
            icons = data.field_client_icons.map((item, i) =>
                <div key={item.target_id + ""} className="col-6 col-sm-3 p-4">
                    <img className="icon p-0 client-logo" src={item.url} alt={item.alt} />
                </div>
            );
        }
        return (
            <div className="container my-5" id="clients">
                <div className="row">
                    {!!data && <div className="section-title col-md-4 col-8 offset-2 offset-md-4 text-center">
                        <h2 className="oswald-font-style">{data.field_title[0].value}</h2>
                    </div>
                    }
                    {!!data && <div className="col-12 section-content mb-0 text-center">
                        <p className="text-dark">
                            {data.field_subtitle[0].value}
                        </p>
                    </div>
                    }
                </div>
                <div className="row align-items-center my-5 text-center">
                    {icons}
                </div>
            </div>

        );
    }
}

export default ClientsSimp;