const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    password: null,
    isFetching: true
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            state = {
                ...state,
                ...action.data
            }
            break;
        default:
            break;
    }
    return state;
};
export default authReducer
export const authActionCreaters = {
    setAuthUserData: (data) => ({
        type: SET_AUTH_USER_DATA,
        data: data
    }),
}