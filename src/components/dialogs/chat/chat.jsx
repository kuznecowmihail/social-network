import classes from './chat.module.css';
import Message from './message/message';
import InputMessage from './inputmessage/inputmessage';

const Chat = (props) => {
    return (
        <div className={classes.messanger}>
            <div className={classes.messages}>
                {
                    props.messages.map((data) => {
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
                    <InputMessage newMessageTextAreaValue={props.newMessageTextAreaValue}
                        activeDialogUserId={props.activeDialogUserId}
                        sendMessage={props.sendMessage}
                        onMessageTextAreaChanged={props.onMessageTextAreaChanged} />
                </ div>
            }
        </div>);
}
export default Chat;