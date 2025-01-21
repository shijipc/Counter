import {useState} from 'react';


function Counter(){
 
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <div className="button-row">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        </div>
        </div>
    )
}
export default Counter