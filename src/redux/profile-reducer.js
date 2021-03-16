const ADD_POST = 'ADD-POST';
const UPPDATE_POST_TEXT_AREA = 'UPPDATE-POST-TEXT-AREA';
const UPPDATE_STATUS_TEXT_AREA = 'UPPDATE-STATUS-TEXT-AREA';

let initialState = {
    info: {
        name: "Mike",
        age: 22,
        descriprion: "Software Developer",
        avatarSrc: 'https://c.pxhere.com/photos/54/aa/cat_animal_nature_close_up-1106847.jpg!d'
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
    }
    return state;
};
export const profileActionCraeters = {
    addPost: () => ({ type: ADD_POST }),
    onPostTextAreaChanged: (value) => ({
        type: UPPDATE_POST_TEXT_AREA,
        value: value
    }),
    updateStatusActionCreater: (value) => ({
        type: UPPDATE_STATUS_TEXT_AREA,
        value: value
    })
}
export default profileReducer