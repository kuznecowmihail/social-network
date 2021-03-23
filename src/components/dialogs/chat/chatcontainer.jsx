import { connect } from 'react-redux';
import { React, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Chat from './chat';
import NullChat from './nullchat/nullchat';
import { ChatContext } from '../../../context';
import * as axioshelper from '../../../axioshelper/axioshelper';
import { dialogActionCreaters } from './../../../redux/dialogs-reducer';

const ChatContainer = (props) => {
    let activeDialogUserId = props.match.params['dialogid'];
    useEffect(() => {
        if (activeDialogUserId) {
            getMessages();
        }
    }, [activeDialogUserId]);
    const getMessages = () => {
        let url = `/messages/${activeDialogUserId}`;
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let messages = data && data.messages;
            props.setMessages(messages);
        });
    };
    return (props.messages.length
        ? <ChatContext.Provider value={{...props, activeDialogUserId}}>
            <Chat />
        </ChatContext.Provider>
        : <NullChat />
    );
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