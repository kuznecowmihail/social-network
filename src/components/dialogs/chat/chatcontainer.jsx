import axios from 'axios';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import Chat from './chat';
import NullChat from './nullchat/nullchat'
import {dialogActionCraeters} from './../../../redux/dialogs-reducer';

const ChatContainer = (props) => {
    useEffect(() => {
        if (props.messages.length === 0 && props.activeDialogId) {
            getMessages();
        }
    });
    const getMessages = () => {
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(`/messages/${props.activeDialogId}`)
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data;
                let messages = data && data.messages;
                props.setMessages(messages);
            });
    };
    return props.messages.length 
        ? <Chat messages={props.messages}
            newMessageTextAreaValue={props.newMessageTextAreaValue}
            activeDialogUserId={props.activeDialogUserId}
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
    sendMessage: dialogActionCraeters.sendMessageActionCreater,
    onMessageTextAreaChanged: dialogActionCraeters.updateMessageActionCreater,
    setMessages: dialogActionCraeters.setMessagesActionCreater
})(ChatContainer);