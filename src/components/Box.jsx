import React, { useState , useEffect } from 'react'
import Child from './Child';

// useStaet
export default function Box() {

    const [counter,setCounter] = useState(0);

    useEffect(()=>{
      console.log("lifecycle");
    });
    
    function increment(){
        // deepcopy
        let count = counter;
        count++;
        setCounter(count);
    }
  return (
    <div>
        <h1>counter is : {counter}</h1>
        <button onClick={increment}>increment</button>
        <Child name='ahmed' />
    </div>
  )
}
