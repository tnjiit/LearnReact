import React from "react";

class TodoItems extends React.Component {
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(
            (item) => {
                return <li key={item[0]}>{item[1]}</li>;
            }
        );
        return (
            <ol className="thelist">
                {listItems}
            </ol>
        );
    }
}

export default TodoItems;