import React from 'react';
import List from './list/list';
import classes from './users.module.css';

const Users = (props) => {
    const updateSeatchTextArea = (e) => {
        let value = e.target.value;
        props.updateSeatchTextArea(value);
    };
    const getUsers = page => {
        props.getUsers(page);
    };
    return (
        <div className={classes.users}>
            <div className={classes.search}>
                <input type='text' onChange={updateSeatchTextArea}
                    value={props.newSearchTextAreaValue} />
            </div>
            <List changeFollowed={props.changeFollowed}
                users={props.users.filter(item =>
                    item.name.toLowerCase().includes(props.newSearchTextAreaValue.toLowerCase()))} />
            {
                props.isFetching &&
                <div className={classes.fetching}>
                    <img src='https://recxon.pro/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif' />
                </div>
            }
            {
                props.moreVisible && 
                <div className={classes.more}>
                    <button onClick={() => {
                        getUsers(props.page);
                    }}>More</button>
                </div>
            }

        </div>
    );
};
export default Users