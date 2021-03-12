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
                props.moreVisible && <div className={classes.more}>
                    <button onClick={() => {
                        getUsers(props.page);
                    }}>More</button>
                </div>
            }

        </div>
    );
};
export default Users