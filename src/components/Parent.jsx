import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function Parent() {
    const [Info, setInfo] = React.useState('')
  return (
    <div> 
        Parent
        <Child1 Info={Info}></Child1>
        <Child2 Info={Info} setInfo={setInfo}></Child2>
    </div>
  )
}
