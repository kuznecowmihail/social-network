import React, {useState} from 'react';
import classes from './status.module.css';

const Status = (props) => {
    const [isEdit, changeEdit] = useState(false);
    const updateStatusTextArea = (e) => {
        debugger;
        props.updateStatusTextArea(e.target.value);
    };
    return (
        <div className={classes.status}>
            {
                isEdit
                    ? <input value={props.statusTextAreaValue} 
                        onChange={updateStatusTextArea} 
                        onBlur ={() => changeEdit(!isEdit)} 
                        autoFocus={true} />
                    : <span onDoubleClick={() => changeEdit(!isEdit)}>{props.statusTextAreaValue}</span>
            }
        </div>
    );
}
export default Status;