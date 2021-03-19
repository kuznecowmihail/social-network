import axios from 'axios';
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
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(url)
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
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