import React from "react";
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(
            (item) => {
                return (
                    <li 
                        key={item[0]} 
                        onClick={
                            (event) => {this.props.deleteItem(item[0])}
                        }
                    >
                        {item[1]}
                    </li>
                );
            }
        );
        return (
            <ol className="thelist">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>                    
            </ol>
        );
    }
}

export default TodoItems;