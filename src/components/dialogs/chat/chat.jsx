import React, {useContext} from 'react';
import classes from './chat.module.css';
import Message from './message/message';
import { ChatContext } from './../../../context';
import InputMessage from './inputmessage/inputmessage';

const Chat = (props) => {
    const chatContext = useContext(ChatContext);
    return (
        <div className={classes.messanger}>
            <div className={classes.messages}>
                {
                    chatContext.messages.map((data) => {
                        return (
                            <Message key={data.id}
                                message={data.message}
                                direction={data.direction} />
                        );
                    })
                }
            </div>
            {
                <div className={classes.inputContainer}>
                    <InputMessage newMessageTextAreaValue={chatContext.newMessageTextAreaValue}
                        activeDialogUserId={chatContext.activeDialogUserId}
                        sendMessage={chatContext.sendMessage}
                        onMessageTextAreaChanged={chatContext.onMessageTextAreaChanged} />
                </ div>
            }
        </div>);
}
export default Chat;