import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TodoListItem = (props) => {
  const [done, setDone] = useState(false);
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const styless = {
    textDecoration: done ? "line-through" : "",
    animation: "strikethrough 2s 0.5s cubic-bezier(.55, 0, .1, 1) 1",
	transition: "transform 0.5s cubic-bezier(.55, 0, .1, 1)",
  transformOrigin: "center left",
  };

  const editHandler = () => {
    props.onEdit(props.text)
  }

  return (
    <>
      <li
        style={styless}
        className="goal-item m-auto col-4 d-flex justify-content-between"
        onClick={() => setDone(true)}
      >
        {props.children}
        <span>
            <Button variant="outline-success" onClick={editHandler} >
              Edit
            </Button>
          
          <Button onClick={deleteHandler} className="ms-2" variant="outline-light">
            Del
          </Button>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;
