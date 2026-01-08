import { useStore } from 'zustand';
import useTaskStore from '../src/Store/Tasks';
import '../src/Task.css';
import classNames from 'classnames'
import { shallow } from 'zustand/shallow'
import { useMemo } from 'react';



// const STATUS = "PLANNED";

export default function Tasks({title}){
    const mytasks = useTaskStore((store)=>store.tasks.find(t=>t.title===title),shallow)
    const deleteTask = useTaskStore((store)=>store.deleteTask)

    function handleDragStart(e){
        e.target.style.opacity = "0.5"
    }

    return(
        <div className='tasks' draggable onDragStart={handleDragStart}>
            <div>{title}</div>
            <div className='bottom-wrapper'>
                <div className='del-icon'><img src="../src/assets/Delicon.png" alt="icon" onClick={()=>{deleteTask(title)}}/></div>
                <div className={classNames('status',mytasks.state)}>{mytasks.state}</div>
            </div>
        </div>
    )
}