import React, { useReducer } from 'react'
import "./UseReducer.css"


const intialState={count:0}

const UseReducer = () => {
   
  const counterReducer =(state,action)=>{
        switch(action){
            case 'INCREMENT':
                return state + 1;
                case 'DECRIMENT':
                    return state - 1;
                    case 'RESET':
                        return 0;

        }
    };
  const [count,dispatch]=useReducer(counterReducer,0);


  return (


    <div className='main'>
        <h1 className='h1'>Counter Apk With UseReducer</h1>
            <h1 className='count'>{count}</h1>
        <div>
   <button className='btn1' onClick={()=>{dispatch('INCREMENT')}}>Increment</button> 
   <button className='btn2' onClick={()=>{dispatch('DECRIMENT')}}>Decrement</button>
   <button className='btn3' onClick={()=>{dispatch('RESET')}}>Reset  </button>
   </div>
    </div>
  )
}

export default UseReducer
