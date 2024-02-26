import React from "react";
import "./menu-button.css";

class MenuButton extends React.Component {
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate:MenuButton", newProps, newState);
        return false;
    }

    render() {
        console.log("Rendering: MenuButton");        
        return (
            <button id="roundButton" 
                onMouseDown={this.props.handleMouseDown}>
            </button>
        );
    }
}

export default MenuButton;