import React, { Component } from 'react';
import axios from 'axios';

class Servicesection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drupalData: [],
        };
        props.drupalService.
            getServiceBlocks()
            .then(res => {
                this.setState({ drupalData: res.data });
            })
            .catch(error => {
                console.error('Error fetching Drupal data:', error);
            });
    }

    render() {
        let drupalServices = [];
        let servicesCount = this.state.drupalData.length;
        debugger;
        const borderColumnWidth = (12 % servicesCount) / 2;
        const width = (12 - borderColumnWidth) / servicesCount;
        if (this.state.drupalData && this.state.drupalData.length) {
            drupalServices = this.state.drupalData.map((serviceItem) => {
                return (
                    <Serviceparent
                        key={serviceItem.id[0].value + ""}
                        name={serviceItem.field_service_title[0].value}
                        icon={serviceItem.field_service_icon[0]}
                        width={width}
                    >
                        <p>{serviceItem.field_service_description[0].value}</p>
                    </Serviceparent>);
            });
        }

        return (
            <div className="container-fluid-xl container">
                {borderColumnWidth > 0 && <div className={'col-xl-' + borderColumnWidth}></div>}
                <div className="row">
                    {drupalServices}
                </div>
                {borderColumnWidth > 0 && <div className={'col-xl-' + borderColumnWidth}></div>}
            </div>
        );
    }
}

function Serviceparent(props) {
    const name = props.name;
    const icon = props.icon;
    const count = props.count;
    let width = props.width;
    width = Math.ceil(width);
    let columnClassName = `col-12 col-sm-6 col-xl-${width} text-center`;

    return (
        <div className={columnClassName}>
        <div className="" style={{ borderRadius: "10px" }}>
            <div className="serviceicon position-relative bg-white" style={{ height: "150px" }}>
                <img style={{ height: "100%" }} src={icon.url} alt={icon.alt} />
            </div>
            <div className="oswald-font-style position-relative" style={{ top: "-30px" }}>
                <h4>{name}</h4>
            </div>
            <div className="position-relative" style={{ top: "-20px" }}>
                {props.children}
            </div>
        </div>
        </div >
    );
}

export default Servicesection;