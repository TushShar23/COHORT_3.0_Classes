import '../src/Task.css';
import classNames from 'classnames'


const STATUS = "ONGOING";

export default function Tasks({title}){
    return(
        <div className='tasks'>
            <div>{title}</div>
            <div className='bottom-wrapper'>
                <div></div>
                <div className={classNames('status',STATUS)}>{STATUS}</div>
            </div>
        </div>
    )
}