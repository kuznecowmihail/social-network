import axios from 'axios';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import Users from './users';
import { usersActionCraeters } from '../../redux/users-reducer';

const UsersContainer = (props) => {
    const [page, setPage] = useState(0);
    const [isFetching, setFetching] = useState(false);
    const [moreVisible, setMoreVisible] = useState(true);
    useEffect(() => {
        if(page === 0) {
            props.setUsers([]);
            props.updateSeatchTextArea('');
        }
        getUsers();
    }, [page]);
    const getUsers = () => {
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(`/users/page/${page}`)
            .then(response => {
                setFetching(false);
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data && response.data.data;
                let users = data && data.users;
                setMoreVisible(data && data.remainder > 0);
                props.addUsers(users);
            });
    };
    return (
        <Users users={props.users}
            newSearchTextAreaValue={props.newSearchTextAreaValue}
            isFetching={isFetching}
            moreVisible={moreVisible}
            page={page}
            setPage={setPage}
            setMoreVisible={setMoreVisible}
            setFetching={setFetching}
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