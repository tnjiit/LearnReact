import React from "react";
import MenuButton from "./menu-button";
import Menu from "./menu";

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(event) {
        console.log("clicked");
        this.setState(
            {
                visible: !this.state.visible,
            }
        );
    }

    render() {
        console.log("Rendering: MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                <div>
                    <p>Can you spot the item?</p>
                    <ul>
                        <li>Main:Alpha</li>
                        <li>Main:Beta</li>                    
                        <li>Main:Charlie</li>                                        
                        <li>Main:Delta</li>                                        
                    </ul>
                </div>
            </div>                
        );
    }
}

export default MenuContainer;