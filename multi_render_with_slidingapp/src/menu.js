import React from "react";
import "./menu.css";

class Menu extends React.Component {
    render() {
        let visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show";
        }

        console.log("Rendering: Menu");

        return (            
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}
            >
                <h2><a href="#">Menu:alpha</a></h2>
                <h2><a href="#">Menu:beta</a></h2>                
                <h2><a href="#">Menu:charlie</a></h2>                
                <h2><a href="#">Menu:delta</a></h2>                
            </div>
        );
    }
}

export default Menu;