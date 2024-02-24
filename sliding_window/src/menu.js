import React from "react";
import "./menu.css";

class Menu extends React.Component {
    render(){
        let visibility = "hide";
        if (this.props.visibility === true) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}
            >
                <h2><a href="#">Home</a></h2> 
                <h2><a href="#">About</a></h2>
                <h2><a href="#">Contact</a></h2>
                <h2><a href="#">Search</a></h2>
            </div>            
        );
    }
}

export default Menu;