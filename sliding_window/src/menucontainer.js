import { Component } from "react";
import MenuButton from "./menubutton";
import Menu from "./menu";

class MenuContainer extends Component { 
    constructor(props) {
        super(props);
        this.state = { 
            visible: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(event) { 
        this.toggleMenu();
        console.log("clicked");
        event.stopPropagation(); 
    }

    toggleMenu() { 
        this.setState({
            visible: !this.state.visible 
        });
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown} visibility={this.state.visible} />
            </div>
        );
    }

}

export default MenuContainer;