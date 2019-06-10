import * as React from "react";
import {handleAddTodo, handleDeleteTodo, handleToggle} from "../actions/todos";
import List from "./List";
import {connect} from "react-redux";

class Todos extends React.Component {

    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''))
    };

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    };

    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))
    };

    render() {
        return (

            <div>
                <h1>Todo List</h1>
                <label>
                    <input type="text" ref={(input) => this.input = input} placeholder="Add Todo"/>
                </label>
                <button onClick={this.addItem}>Add Todo</button>
                <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem}/>
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);


