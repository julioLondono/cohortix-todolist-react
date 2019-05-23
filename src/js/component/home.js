import React from "react";
import { ToDoLine } from "./toDoLine.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				"Wake Up",
				"Make Breakfast",
				"Go to Work",
				"sleep in my bed"
			],
			inputValue: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		let newTodoList = this.state;
		newTodoList.todos.push(this.state.inputValue);
		newTodoList.inputValue = "";
		this.setState(newTodoList);
	};

	deleteLine = index => {
		let tempState = this.state;
		tempState.todos.splice(index, 1);
		this.setState(tempState);
	};

	moveUp = index => {
		const splicedArray = this.state.todos.splice(index, 1);
		// console.log("todos=" + this.state.todos);
		// console.log("Spliced Array=" + splicedArray);
		let orderedArray = this.state.todos.splice(index - 1, 0, splicedArray);
		this.setState(orderedArray);
	};

	render() {
		const mappedItems = this.state.todos.map((item, index) => {
			let firstLine = index === 0 ? "hideBtn" : "fas fa-angle-up";

			return (
				<ToDoLine
					key={index}
					toDo={item}
					delete={() => this.deleteLine(index)}
					upBtn={firstLine}
					move={() => this.moveUp(index)}
				/>
			);
		});

		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div id="myDIV" className="header">
						<h2>My To Do List</h2>
						<input
							autoFocus={true}
							type="text"
							id="myInput"
							placeholder="Add New To Do Task..."
							value={this.state.inputValue}
							onChange={event => {
								this.setState({
									inputValue: event.target.value
								});
							}}
						/>
					</div>
				</form>
				<div className="todosTable">
					<ol id="myUL" className="tabla">
						{mappedItems}
					</ol>
				</div>
				<br />
				<h3>Tasks Quantity= {this.state.todos.length}</h3>
				<button
					onClick={event => {
						this.setState({
							todos: []
						});
					}}>
					{" "}
					Clean List{" "}
				</button>
			</div>
		);
	}
}
