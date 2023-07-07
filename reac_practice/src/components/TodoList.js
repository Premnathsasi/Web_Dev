import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <TodoListItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDelete}        
          onEdit={props.onEdit}
          text={goal.text}
        >
          {goal.text}{" "}
        </TodoListItem>
      ))}
    </ul>
  );
};

export default TodoList;
