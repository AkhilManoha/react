import { useState } from "react";

function Test1(){
    let [counter, setCounter]=useState(100)
    return(
        <div>
    <h2>Counter value is: {counter}</h2>
<button onClick={()=>setCounter(++counter)}>Increment</button>
<button onClick={()=>setCounter(--counter)}>Decrement</button>
        </div>
    )
}
export default Test1;