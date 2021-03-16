import axios from 'axios';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Users from './users';
import { usersActionCraeters } from '../../redux/users-reducer';

const UsersContainer = (props) => {
    const [isInit, setInit] = useState(false);
    const [page, setPage] = useState(0);
    useEffect(() => {
        if (props.users.length === 0 && !isInit) {
            setInit(true);
            getUsers();
        }
    });
    const getUsers = (pageCount, setFetching, setMoreVisible) => {
        pageCount = pageCount || 0;
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(`/users/${pageCount}`)
            .then(response => {
                if(setFetching) {
                    setFetching(false);
                }
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data;
                let users = data && data.users;
                setPage(pageCount + 1);
                if(setMoreVisible) {
                    setMoreVisible(data && data.remainder > 0);
                }
                props.setUsers(users);
            });
    };
    return (
        <Users users={props.users}
            newSearchTextAreaValue={props.newSearchTextAreaValue}
            page={page}
            getUsers={getUsers}
            updateSeatchTextArea={props.updateSeatchTextArea}
            changeFollowed={props.changeFollowed} />);
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
            dispatch(usersActionCraeters.updateSearchActionCreater(value));
        },
        changeFollowed: (userId) => {
            dispatch(usersActionCraeters.changeFollowedCreater(userId));
        },
        setUsers: (users) => {
            dispatch(usersActionCraeters.setUsersCreater(users));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);