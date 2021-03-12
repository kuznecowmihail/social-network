import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import dialogsReducer from './dialogs-reducer'; 
import menuReducer from './menu-reducer'; 

let reducers = combineReducers({
    profileData: profileReducer,
    usersData: usersReducer,
    dialogsData: dialogsReducer,
    menuData: menuReducer
});
let store = createStore(reducers);

export default store;