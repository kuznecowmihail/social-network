import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const ADD_POST = 'ADD-POST';
const UPPDATE_POST_TEXT_AREA = 'UPPDATE-POST-TEXT-AREA';
const UPPDATE_STATUS_TEXT_AREA = 'UPPDATE-STATUS-TEXT-AREA';
const SET_INFO = 'SET-INFO';

let initialState = {
    info: {
        name: "Mike",
        age: 22,
        descriprion: "Software Developer",
        img: 'https://c.pxhere.com/photos/54/aa/cat_animal_nature_close_up-1106847.jpg!d'
    },
    posts: [
        { id: "1", text: "Hi, how are you?", likesCount: 5 },
        { id: "2", text: "It's my first post", likesCount: 8 },
        { id: "3", text: "post 3", likesCount: 0 }
    ],
    newPostTextAreaValue: '',
    statusTextAreaValue: '123'
}
const addPost = (state) => {
    let newPost = {
        id: (state.posts.length + 1).toString(),
        text: state.newPostTextAreaValue,
        likesCount: 0
    }
    let stateCopy = {
        ...state,
        newPostTextAreaValue: '',
        posts: [...state.posts, newPost]
    };
    return stateCopy;
};
const updatePostTextArea = (state, value) => {
    let stateCopy = {
        ...state,
        newPostTextAreaValue: value
    };
    return stateCopy;
};
const updateStatusTextArea = (state, value) => {
    let stateCopy = {
        ...state,
        statusTextAreaValue: value
    };
    return stateCopy;
};
const setInfo = (state, data) => {
    if(state.info.id === data.info.id) { 
        return state;
    }
    let stateCopy = {
        ...state,
        info: data.info,
        posts: data.posts
    };
    return stateCopy;
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            state = addPost(state);
            break;
        }
        case UPPDATE_POST_TEXT_AREA: {
            state = updatePostTextArea(state, action.value);
            break;
        }
        case UPPDATE_STATUS_TEXT_AREA: {
            state = updateStatusTextArea(state, action.value);
            break;
        }
        case SET_INFO: {
            state = setInfo(state, action.data);
            break;
        }
    }
    return state;
};
export const profileActionCraeters = {
    addPost: () => ({ type: ADD_POST }),
    onPostTextAreaChanged: (value) => ({
        type: UPPDATE_POST_TEXT_AREA,
        value: value
    }),
    updateStatusTextArea: (value) => ({
        type: UPPDATE_STATUS_TEXT_AREA,
        value: value
    }),
    setInfo: (data) => ({
        type: SET_INFO,
        data: data
    })
}
export default profileReducer