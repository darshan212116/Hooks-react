import React, { useRef } from 'react'
import useLocalStorage from './useLocalStorage';

export default function Custom() {

    const [comments, setComments] = useLocalStorage('messages', []);

    const inputref = useRef();

    const addcomment = () => {
      let comment = inputref.current.value;
      setComments([...comments, comment]);
    }
  return (
    <>
      <h1 style={{color : 'white'}}>Usestorage Custom Hook </h1>
      <div>
        <input style={{padding:10, color:'white'}} placeholder='comment' ref={inputref}></input>
        <button style={{color:'black', margin:'15px'}}onClick={addcomment}>Add</button>
        {
          comments.map((c) => <p>{c}</p>)
        }
      </div>
    </>
  )
}