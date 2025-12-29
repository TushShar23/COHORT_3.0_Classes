import { useMemo, useState } from 'react';
import '../src/Column.css';
import useTaskStore from '../src/Store/Tasks';
import Task from './Task';
// import { shallow } from 'zustand/shallow'

export default function Columns({ CurrentState }) {
    const tasks = useTaskStore((store) => store.tasks)

    const mytasks = useMemo(() => tasks.filter((t) => t.state === CurrentState),
        [tasks, CurrentState]
    );

    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const addtask = useTaskStore((store) => store.addTask)

    console.log(tasks)

    return (
        <div className="column">
            <div className='headers'>
                <h3>{CurrentState}</h3>
                <button onClick={() => { setOpen(true) }}>Add</button>
            </div>
            {
                // mytasks.map((task)=>(<Task title={task.title} key={task.title}/>)) is we are iterating over task array in our STORE and INJECTING ITS VALUE IN THE PROPS In the TASK COMPONENT.
                mytasks.map((task) => <Task title={task.title} key={task.title} />)
            }
            {open && <div className="input-box">
                <div className="inputcontent">
                    <input onChange={(e) => { setText(e.target.value) }} type="text" value={text} />
                    <button onClick={() => {
                        addtask(text, CurrentState)
                        setText('')
                        setOpen(false)
                    }}
                    >Submit</button>
                </div>
            </div>
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







    addtask("hello", CurrentState) - 

    THIS WILL CREATE CONFUSION MEANS WE HAVE USED TITLE AS OUR "UNIQUE KEY" FOR OUR TASKS.WHEN WE CLICK ON BUTTON IN PLANNED WITH TITLE HELLO STATUS WILL BE PLANNED BUT WHEN WE CLICK BUTTON IN "ONGOING" IT STILL SHOWS PLANNED COZ THE TITLE(key) IS SAME.so we HAVE TO MAKE OUR TITLE DIFFERENT SO THAT IT IS RECOGNISED AS UNIQUE.

            --> key={task.title} = key uniquely identify karta hai component ko
                                    React key ke basis pe decide karta hai:

                                    naya component banau?
                                    ya purana reuse karu?
                                    Tum yaha likh rahe ho 👇

                                    <Task title={task.title} key={task.title} />


                                    👉 Agar title "hello" hai:

                                    PLANNED → key = "hello"

                                    ONGOING → key = "hello"

                                    DONE → key = "hello"

                                    ❌ Same key in different lists = React confuse ho gaya

                                    🤯 Is confusion ka effect

                                    React sochta hai:

                                    “Arre ye toh same component hai, bas jagah change hui hai”

                                    Isliye:

                                    pehle jo "hello" PLANNED me bana

                                    wahi component ONGOING / DONE me reuse ho gaya

                                    aur uska state wahi ka wahi raha → PLANNED
                                                
            
            SOLUTION : addTask("hello"+currentstate,currentstate); this will differ the title and status WILL BE DIFFERENT.
            
            
            

    
    
    
    */
