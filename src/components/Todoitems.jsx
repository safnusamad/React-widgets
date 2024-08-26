import React from 'react'
import tick from '../assets/tick.png';
import notick from '../assets/not_tick.png';
import delete_icons from '../assets/delete.png'


const Todoitems = ({text, id, isComplete, deleteTodo,toggle}) => {
  return (
    <>
        <div className='flex items-center my-3 gap-3'>
            <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete? tick: notick} alt="" className='w-7' />
                <p className={`text-slate-700 ml-4 text-[17px] ${isComplete? "line-through":""}`}>{text}</p>
            </div>
            <div className='w-3.5'>
                <img onClick={()=>{deleteTodo(id)}} src={delete_icons} alt="" />
            </div>
        </div>
    </>
    
  )
}

export default Todoitems