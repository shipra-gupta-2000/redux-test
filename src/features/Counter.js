import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useState } from 'react'

export default function Counter() {

    const [value,setValue] = useState(0);
    const count = useSelector((states)=>states.counter.value)
    const dispatch = useDispatch()

    const inputChange=(e)=>{
        setValue(parseInt(e.target.value))
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input onChange={inputChange}/>
            <button onClick={()=>dispatch(incrementByAmount(parseInt(value)))}>Increment by Value</button>
        </div>
    )
}