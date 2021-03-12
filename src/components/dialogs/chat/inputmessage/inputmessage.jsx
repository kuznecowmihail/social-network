import classes from './inputmessage.module.css';
import React from 'react';

const InputMessage = (props) => {
    let sendMessage = () => {
        let userId = props.activeDialogUserId;
        props.sendMessage(userId);
    };
    let onMessageTextAreaChanged = (value) => {
        props.onMessageTextAreaChanged((value.target.value));
    };
    return ( 
        <div className={ classes.input }>
            <textarea placeholder='Enter your message'
                onChange={onMessageTextAreaChanged}
                value={props.newMessageTextAreaValue} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
export default InputMessage;