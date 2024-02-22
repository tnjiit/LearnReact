import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div className="todolistmain">
                <div className="header">
                    <form>
                        <input placeholder="Enter Task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>                
            </div>
        );
    }
}

export default TodoList;