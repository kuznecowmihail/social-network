import axios from 'axios';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import Users from './users';
import {usersActionCraeters} from '../../redux/users-reducer';

const UsersContainer = (props) => {
    const [page, setPage] = useState(0);
    const [moreVisible, setMoreVisible] = useState(true);
    useEffect(() => {
        if (props.users.length === 0) {
            getUsers();
        }
    });
    const getUsers = (pageCount) => {
        pageCount = pageCount || 0;
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(`/users/${pageCount}`)
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data;
                let users = data && data.users;
                setMoreVisible(data && data.remainder > 0);
                props.setUsers(users);
                setPage(pageCount + 1);
            });
    };
    return <Users users={props.users}
        newSearchTextAreaValue={props.newSearchTextAreaValue}
        moreVisible={moreVisible}
        page={page}
        getUsers={getUsers}
        updateSeatchTextArea={props.updateSeatchTextArea}
        changeFollowed={props.changeFollowed} />;
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