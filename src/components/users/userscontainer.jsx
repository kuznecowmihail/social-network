import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Users from './users';
import { UsersContext } from '../../context';
import * as axioshelper from '../../axioshelper/axioshelper';
import { usersActionCraeters } from '../../redux/users-reducer';

const UsersContainer = (props) => {
    const [page, setPage] = useState(0);
    const [isFetching, setFetching] = useState(false);
    const [moreVisible, setMoreVisible] = useState(true);
    useEffect(() => {
        if (page === 0) {
            props.setUsers([]);
            props.updateSeatchTextArea('');
        }
        getUsers();
    }, [page]);
    const getUsers = () => {
        let url = `/users/page/${page}`;
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            setFetching(false);
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let users = data && data.users;
            setMoreVisible(data && data.remainder > 0);
            props.addUsers(users);
        });
    };
    return (
        <UsersContext.Provider value={{ ...props, isFetching, moreVisible, page, setPage, setMoreVisible, setFetching }}>
            <Users />
        </UsersContext.Provider>
    );
};
let mapStateToProps = (state) => {
    return {
        newSearchTextAreaValue: state.usersData.newSearchTextAreaValue,
        users: state.usersData.users
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateSeatchTextArea: (value) => {
            dispatch(usersActionCraeters.updateSeatchTextArea(value));
        },
        changeFollowed: (userId) => {
            dispatch(usersActionCraeters.changeFollowed(userId));
        },
        addUsers: (users) => {
            dispatch(usersActionCraeters.addUsers(users));
        },
        setUsers: (users) => {
            dispatch(usersActionCraeters.setUsers(users));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);