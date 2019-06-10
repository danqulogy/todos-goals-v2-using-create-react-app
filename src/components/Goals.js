import React from "react";
import {handleAddGoal, handleDeleteGoal} from "../actions/goals";
import List from "./List";
import {connect} from "react-redux";

class Goals extends React.Component {
    addGoal = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(
            this.goalInput.value,
            () => this.goalInput.value = ''
        ))
    };
    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal))
    };

    render() {
        return (
            <div>
                <h1>Goals</h1>
                <label>
                    <input type="text" placeholder="Add Goals" ref={(input) => this.goalInput = input}/>
                </label>
                <button onClick={this.addGoal}>Add Goal</button>
                <List items={this.props.goals} remove={this.removeItem}/>
            </div>
        )
    }
}


export default connect((state) => ({
    goals: state.goals
}))(Goals);
