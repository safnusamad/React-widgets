import React, { useEffect, useRef, useState } from 'react'
import icons from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

    const [todoList, settodoList] = useState(localStorage.getItem("todo")? JSON.parse(localStorage.getItem("todo")) : [])

    const inputRef = useRef();

    const add=()=>{
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo={
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        settodoList((prev)=>[...prev,newTodo])
        inputRef.current.value="";
    };

    const deleteTodo=(id)=>{
        settodoList((prevTodo)=>{
            return prevTodo.filter((todo) => todo.id !== id)
        })
    }

    const toggle=(id)=>{
        settodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(todoList));
    },[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col rounded-xl min-h-[550px] px-8'>
        {/* title */}
        <div className="flex items-center mt-7 gap-2">
            <img className='w-8' src={icons} alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        {/* inputbox */}
        <div className="flex items-center my-7 bg-gray-300 rounded-full">
            <input ref={inputRef} className='bg-transparent bottom-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add the Task' />
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white font-medium'>ADD +</button>
        </div>
        {/* todo list */}
        <div>
            {todoList.map((items,index)=>{
                return <Todoitems key={index} text={items.text} id={items.id} isComplete={items.isComplete} deleteTodo={deleteTodo} 
                 toggle={toggle}/>
            })}
        </div>

    </div>
  )
}

export default Todo