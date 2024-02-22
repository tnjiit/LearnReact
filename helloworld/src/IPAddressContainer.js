import React from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_address: "...",
        };
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(prevProp, prevState) {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest(event) {
        console.log(xhr.status, xhr.response);
        if(xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            this.setState(
                {
                    ip_address: response.ip,
                }
            );
        }
    }

    render() {
        return (
            <IPAddress ip={this.state.ip_address}/>
        );
    }
}

export default IPAddressContainer;