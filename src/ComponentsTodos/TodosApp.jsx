import React, {useState} from 'react';
import TodosInput from './TodosInput';
import {v4 as uuidv4} from 'uuid';
import TodosList from './TodosList';
import TodosItem from './TodosItem';
import styles from './todos.module.css'


export default function TodosApp() {

    // Step-1b
    const [todos, setTodos] = useState([]);

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

    </div>
  )
}
