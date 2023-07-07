import React, { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import EditTodo from './components/EditTodo';


function App(props) {
  const [task, setTask] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState('')

  const addTaskHandler = (enteredText) => {
      setTask(prev => {
        const updatedtask = [...prev];
        updatedtask.push({text: enteredText, id: Math.random().toString() })
        return updatedtask
      })
  };

  const deleteHandler = (id) => {
    setTask(prev => {
      const updatedtask = prev.filter(item => item.id !== id);
      return updatedtask 
    })
  };
  const editHandler = (text) => {
    const selectedEdit = task.filter(item => item.text === text)
    setEdit(true)
    setTask(prev => {
      const updatedTask = prev.filter(item => item.text !== text);
      return updatedTask
    })
    setEditValue(selectedEdit[0].text)
    console.log(editValue)
  };

  

  const editSubmitHandler = (editedText) => {
    setTask(prev => {
      const updatedTask = [...prev];
      updatedTask.push({text: editedText, id: Math.random().toString()})
      return updatedTask
    });
    setEdit(false)

  }
 
  return (
    <>
        <TodoForm onAddTask={addTaskHandler} />
        {edit && <EditTodo submitEdit={editSubmitHandler} getItems={editValue} />}
        <TodoList items={task} onDelete={deleteHandler} onEdit={editHandler}/>

    </>
  )
}

export default App