let initialState = {
    bar: [
        {
            id: 1,
            name: "Users",
            to: "/users"
        },
        {
            id: 2,
            name: "Dialogs",
            to: "/dialogs"
        },
        {
            id: 3,
            name: "Profile Info",
            to: "/profile"
        }
    ]
};
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            break;
    }
    return state;
};
export default menuReducer