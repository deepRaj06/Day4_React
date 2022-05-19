import React, {useState} from 'react'
import styles from './todos.module.css'

export default function TodosItem({todo, value, deleteTodo}) {
//   Step-2i
const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
// console.log(todo.isCompleted);
    return (
    <div className={styles.listItems}>
        {/* Step-2h */}

        <input 
        className={styles.checkStyle}
        type="checkbox"
        checked={isCompleted}
        onChange={ (e) => {
            // console.log(e.target.checked);
            setIsCompleted(e.target.checked);
        }}
        
        />
        {/* Step-2e */}
        {/* {value} */}

        <div className={isCompleted ? styles.striked : styles.listTextStyle}>{todo.value}</div>

        {/* Step-2f Delete button */}
        <button className={styles.removeBtn} onClick={ () => {
            deleteTodo(value)
        }}>
            Remove
        </button>
    </div>
  )
}
