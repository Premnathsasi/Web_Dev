import React, { useRef } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";

function TodoForm(props) {
    const taskRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(taskRef.current.value)

        props.onAddTask(taskRef.current.value)
        taskRef.current.value=''
    }
  return (
    <section className="todoForm">
      <h1 className="text-center">Get Things Done</h1>
      <div className="m-auto col-4">
        <Form onSubmit={submitHandler}>
          <InputGroup>
            <Form.Control
              placeholder="Add your task"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              ref={taskRef}
            />
            <Button type="submit" variant="secondary" id="button-addon2">
              Add Task
            </Button>
          </InputGroup>
        </Form>
      </div>
    </section>
  );
}

export default TodoForm;
