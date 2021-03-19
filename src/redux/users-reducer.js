const UPPDATE_SEARCH_TEXT_AREA = 'UPPDATE-SEARCH-TEXT-AREA';
const CHANGE_FOLLOWED = 'CHANGE-FOLLOWED';
const ADD_USERS = 'ADD-USERS';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
    newSearchTextAreaValue: ''
};
const changeFollowed = (state, userId) => {
    let stateCopy = {
        ...state,
        users: state.users.map(user => {
            if(user.id === userId) {
                return {...user, followed: !user.followed}
            }
            return user;
        })
    };
    return stateCopy;
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPPDATE_SEARCH_TEXT_AREA: {
            state = {...state,newSearchTextAreaValue: action.value};
            break;
        }
        case CHANGE_FOLLOWED: {
            state = changeFollowed(state, action.userId);
            break;
        }
        case ADD_USERS: {
            state.users.push(...action.users);
            state = {...state, users: [...state.users]};
            break;
        }
        case SET_USERS: {
            state = {...state, users: action.users};
            break;
        }
    }
    return state;
};
export const usersActionCraeters = {
    updateSeatchTextArea: (value) => ({
        type: UPPDATE_SEARCH_TEXT_AREA,
        value: value
    }),
    changeFollowed: (userId) => ({
        type: CHANGE_FOLLOWED,
        userId: userId
    }),
    addUsers: (users) => ({
        type: ADD_USERS,
        users: users
    }),
    setUsers: (users) => ({
        type: SET_USERS,
        users: users
    })
}
export default usersReducer