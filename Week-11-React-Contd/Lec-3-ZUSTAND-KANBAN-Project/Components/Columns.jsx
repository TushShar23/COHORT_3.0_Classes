import { useMemo } from 'react';
import '../src/Column.css';
import useTaskStore from '../src/Store/Tasks';
import Task from './Task';
// import { shallow } from 'zustand/shallow'

export default function Columns({ CurrentState }){
    const tasks = useTaskStore((store)=>store.tasks)

    const mytasks = useMemo(() => tasks.filter((t) => t.state === CurrentState),
        [tasks, CurrentState]
    );

    console.log(tasks)

    return (
        <div className="column">
            <h3>{CurrentState}</h3>
            {
                // mytasks.map((task)=>(<Task title={task.title} key={task.title}/>))
                mytasks.map((task)=><Task title={task.title} key={task.title}/>)
            }
        </div>
    )
}


// (prev,next)=>{
    //     const longest = prev.length > next.length ? prev.length : next.length;
    //     for(let i=0;i<longest;i++){
    //         if(prev[i]=== undefined || next[i]=== undefined) return false;
    //         if(prev[i]!==next[i])return false;
    //     }
    //     return true;
    // }

/*
    ******** Q-HOW IT IS POSSIBLE THAT FIRST FUNCTION VALUES ARE AUTOMATICALLY PASSED TO THE SECOND PARAMETER(comparisonFn) ? *********

    ANS:- useTaskStore(selectorFn, comparisonFn)
    (it is already decided Like it is the syntax.When we create a store it returns us a hook THAT HOOK IS EXPECTED TO TAKE TWO PARAMETERS(selectorFn,comparisonFn))
    SO THE VALUE/RESULT OF 1ST VALUE AUTOMATICALLY PASSED TO THE SECOND COMPARATOR FUNCTION

    "Ye sab Zustand khud karta hai
    Isliye lagta hai “automatically pass ho gaya”


    Q- IN THIS CASE EVEN SHALLOW WILL NOT WORK AND WHY DO WE NEED A COMPARISON FUNCTION ?

    ANS:- .filter() always creates a new array
    Even if tasks didn’t change → new reference

    useMemo isliye use hota hai kyunki .filter() har render pe nayi array banata hai aur Zustand baar baar reference change dekh ke infinite re-render kar deta hai, jo shallow bhi nahi rok paata.








    That’s why we need the second function. THAT COMPARES THE VALUES(SHALLOWLY) NOT THE ADDRESSES.AND ONLY WHEN THERE IS SOMETHING CHANGED IN THE VALUES OF OBJECTS,ARRAYS,LISTS IT RETURNS FALSE ELSE TRUE

    FALSE -> (re-render)
    TRUE -> (NO re-render)


    ************************************************************8
    ALTERNATIVE TO THIS VERBOSE FUNCTION:

    - useMemo() or WRITE LOGIC IN THE STORE

    - useMemo() - Expensive calculation ko cache karna
    “Result yaad rakh lo”

    
    
    
    */
