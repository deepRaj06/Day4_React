import React from 'react'

export default function Child2(props) {
    const onHandleChange = (e) => {
        let newValue = e.target.value;
        props.setInfo(newValue);
    };

  return (
    <div>
        <input onChange={onHandleChange} />
        Child2: {props.info}
    </div>
  )
}
