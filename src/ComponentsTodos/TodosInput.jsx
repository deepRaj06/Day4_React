import React, {useState} from 'react'
import styles from './todos.module.css'


export default function TodosInput({addTodo}) {
    // Step-1d
    const [value, setValue] = useState('');

  return (
    <div className={styles.inputDiv}>
        {/* TodosInput */}
        {/* Step-1e */}
        <input 
        className={styles.addInput}
        type="text" 
        value={value}
        placeholder='Add a to-do...'
        onChange={ (e) => {
            setValue(e.target.value);
            // <button className={styles.addbutton}
            // onClick={ () => {
            //     addTodo(value);
            //     setValue('');
            // }}>
            // +
            // </button>
        }}/>
        <button className={styles.addbutton}
        onClick={ () => {
          // console.log(value);
          // This check will disable showing checkbox and remove button
          if(value !== '')
          {
            addTodo(value);
            // setValue('');
          }
            setValue('');
        }}>
        +
        </button>
    </div>
  )
}
