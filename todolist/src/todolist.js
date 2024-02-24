import React from "react";
import TodoItems from "./todoitems";
import "./todolist.css";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };        
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(event) {
        let array = this.state.items;
        if(this._input.value) {
            array.unshift(
                [Date.now(), this._input.value]
            );
            this.setState(
                {
                    items: array,
                }
            );    
        }
        console.log(this.state.items);
        this._input.value = "";
        this._input.focus();
        event.preventDefault();
    }

    removeItem(key) {
        let array = this.state.items.filter(
            (x) => {
                return (x[0] !== key);
            }
        )
        this.setState({
            items: array,
        });
    }

    render() {
        let self = this;
        return (
            <div className="todolistmain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input 
                            ref={
                                (element) => {self._input = element}
                            }
                            placeholder="Enter Task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>     
                <TodoItems entries={this.state.items} deleteItem={this.removeItem}/>
            </div>
        );
    }
}

export default TodoList;