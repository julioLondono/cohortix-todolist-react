import React from "react";
import PropTypes from "prop-types";

export const ToDoLine = props => {
	return (
		<li>
			{props.toDo}
			<button className="btn" onClick={props.delete}>
				X
			</button>
		</li>
	);
};

ToDoLine.propTypes = {
	toDo: PropTypes.string,
	delete: PropTypes.func
};
