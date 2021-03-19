import * as axioshelper from '../../../axioshelper/axioshelper'
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Chat from './chat';
import NullChat from './nullchat/nullchat'
import {dialogActionCreaters} from './../../../redux/dialogs-reducer';

const ChatContainer = (props) => {
    let dialogId = props.match.params['dialogid'];
    useEffect(() => {
        if (dialogId) {
            getMessages();
        }
    }, [dialogId]);
    const getMessages = () => {
        let url = `/messages/${dialogId}`;
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if(!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let messages = data && data.messages;
            props.setMessages(messages);
        });
    };
    return props.messages.length 
        ? <Chat messages={props.messages}
            newMessageTextAreaValue={props.newMessageTextAreaValue}
            activeDialogUserId={dialogId}
            sendMessage={props.sendMessage}
            onMessageTextAreaChanged={props.onMessageTextAreaChanged} />
        : <NullChat />;
};
let mapStateToProps = (state) => {
    return {
        activeDialogId: state.dialogsData.activeDialogId,
        messages: state.dialogsData.messages,
        newMessageTextAreaValue: state.dialogsData.newMessageTextAreaValue
    };
};
export default connect(mapStateToProps, {
    sendMessage: dialogActionCreaters.sendMessage,
    onMessageTextAreaChanged: dialogActionCreaters.onMessageTextAreaChanged,
    setMessages: dialogActionCreaters.setMessages
})(withRouter(ChatContainer));