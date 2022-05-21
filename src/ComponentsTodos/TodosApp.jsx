import React, {useState} from 'react';
import TodosInput from './TodosInput';
import {v4 as uuidv4} from 'uuid';
import TodosList from './TodosList';
import TodosItem from './TodosItem';
import styles from './todos.module.css'
import ShowCompletedTodosList from './ShowCompletedTodosList';


export default function TodosApp() {

    // Step-1b
    const [todos, setTodos] = useState([]);

    // State for showcompleted todos

    const [show, setShow] = useState(false);

    // Step-1c
    const addTodo = (newTodo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                value: newTodo,
                isCompleted: false
            }
        ])
    }

    // Step -2g
    const deleteTodo = (value) => {
        let todoFilter = todos.filter( (todo) => {
            return todo.value !== value;
        })
        setTodos(todoFilter);
    }

    // Click function for show completed todos

    // const showCompletedTodosList = () => {
    //     setShow(true);
    // }
  return (
    <div className={styles.mainTodo}>
        {/* TodosApp */}
        {/* Step-1a */}
        <TodosInput addTodo={addTodo}></TodosInput>
        {/* Step-2a */}
        <TodosList>
            {/* Step-2b */}
            {todos.map( (todo) => (
                // Step-2c
                <TodosItem key={todo.id} todo={todo} value={todo.value} deleteTodo={deleteTodo}></TodosItem>
            ))}
        </TodosList>
        <button 
        className={styles.showCompletedToDos} 
        onClick={ () => {
        }}>
            {/* <div {...show ? addTodo={addTodo} : ''}></div> */}
            <span>SHOW COMPLETED TO-DOS</span>
        </button>
{/*         
        <ShowCompletedTodosList >
        <TodosItem key={todos.id} todo={todos} value={todos.value} deleteTodo={deleteTodo}></TodosItem>

        </ShowCompletedTodosList> */}

    </div>
  )
}
