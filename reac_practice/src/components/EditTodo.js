import React, {useEffect,  useRef} from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function EditTodo(props) {
  const valueRef = useRef()

  useEffect(() => {
    valueRef.current.value= props.getItems
  },[props.getItems]);

    const submitHandler = () => {
        console.log('edited')
        props.submitEdit(valueRef.current.value)
    }

  return (
    <div className="m-auto col-4">
        <InputGroup>
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={valueRef} 
          />
          <Button onClick={submitHandler} variant="secondary" id="button-addon2">
            Save Edit
          </Button>
        </InputGroup>
    </div>
  );
}

export default EditTodo;
