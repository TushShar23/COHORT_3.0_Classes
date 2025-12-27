import '../src/Column.css';
import Task from './Task';

export default function Columns({state}){
    return (
        <div className="column">
            <h3>{state}</h3>
            <Task title={"Go to gym"}/>
        </div>
    )
}