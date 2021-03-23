const ADD_POST = 'ADD-POST';
const UPPDATE_POST_TEXT_AREA = 'UPPDATE-POST-TEXT-AREA';
const UPPDATE_STATUS_TEXT_AREA = 'UPPDATE-STATUS-TEXT-AREA';
const SET_USER = 'SET-USER';
const SET_POSTS = 'SET-POSTS';

let initialState = {
    info: {},
    posts: [],
    newPostTextAreaValue: '',
    statusTextAreaValue: ''
}
const addPost = (state) => {
    let newPost = {
        id: (state.posts.length + 1).toString(),
        text: state.newPostTextAreaValue,
        likesCount: 0
    }
    let stateCopy = {
        ...state,
        newPostTextAreaValue: null,
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
const setUser = (state, user) => {
    if(state.info.id === user.id) { 
        return state;
    }
    let stateCopy = {
        ...state,
        info: user
    };
    return stateCopy;
};
const setPosts = (state, posts) => {
    let stateCopy = {
        ...state,
        posts: posts
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
        case SET_USER: {
            state = setUser(state, action.user);
            break;
        }
        case SET_POSTS: {
            state = setPosts(state, action.posts);
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
    setUser: (user) => ({
        type: SET_USER,
        user: user
    }),
    setPosts: (posts) => ({
        type: SET_POSTS,
        posts: posts
    })
}
export default profileReducer