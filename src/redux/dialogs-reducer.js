const ADD_MESSAGE = 'ADD-MESSAGE';
const UPPDATE_MESSAGE_TEXT_AREA = 'UPPDATE-MESSAGE-TEXT-AREA';
const ON_DIALOG_LINK_CLICK = 'ON-DIALOG-LINK-CLICK';
const SET_DIALOGS = 'SET-DIALOGS';
const SET_MESSAGES = 'SET-MESSAGES';

let initialState = {
    dialogs: [],
    messages: [],
    newMessageTextAreaValue: ''
}
const sendMessage = (state) => {
    let message = {
        id: (state.messages.length + 1).toString(),
        message: state.newMessageTextAreaValue,
        direction: 'me'
    }
    let replyMessage = {
        id: (state.messages.length + 2).toString(),
        message: `reply: ${state.newMessageTextAreaValue}`,
        direction: 'companion'
    }
    let stateCopy = {
        ...state,
        messages: [...state.messages, message, replyMessage],
        newMessageTextAreaValue: ''
    };
    return stateCopy;
};
const updateMessageTextArea = (state, text) => {
    let stateCopy = {
        ...state,
        newMessageTextAreaValue: text
    };
    return stateCopy;
};
const onDialogLinkClick = (state, dialogId) => {
    let stateCopy = {
        ...state,
        activeDialogId: dialogId,
        messages: []
    }
    return stateCopy;
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            state = sendMessage(state);
            break;
        }
        case UPPDATE_MESSAGE_TEXT_AREA: {
            state = updateMessageTextArea(state, action.value);
            break;
        }
        case ON_DIALOG_LINK_CLICK: {
            state = onDialogLinkClick(state, action.dialogId);
            break;
        }
        case SET_DIALOGS: {
            state = {
                ...state,
                dialogs: [...action.dialogs]
            };
            break;
        }
        case SET_MESSAGES: {
            state = {
                ...state,
                messages: [...action.messages]
            };
            break;
        }
    }
    return state;
};
export const dialogActionCreaters = {
    sendMessage: (userId) => ({
        type: ADD_MESSAGE
    }),
    onMessageTextAreaChanged: (value) => ({
        type: UPPDATE_MESSAGE_TEXT_AREA,
        value: value
    }),
    onDialogLinkClick: (dialogId) => ({
        type: ON_DIALOG_LINK_CLICK,
        dialogId: dialogId
    }),
    setDialogs: (dialogs) => ({
        type: SET_DIALOGS,
        dialogs: dialogs
    }),
    setMessages: (messages) => ({
        type: SET_MESSAGES,
        messages: messages
    })
}
export default dialogsReducer