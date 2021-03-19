import React, {useState} from 'react';
import List from './list/list';
import Preloader from '.././common/preloader/preloader';
import classes from './users.module.css';

const Users = (props) => {
    const updateSeatchTextArea = (e) => {
        let value = e.target.value;
        props.updateSeatchTextArea(value);
    };
    const onMoreClick = () => {
        props.setFetching(true);
        props.setMoreVisible(false);
        props.setPage(props.page + 1);
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
            <Preloader isFetching={props.isFetching} />
            {
                props.moreVisible && 
                <div className={classes.more}>
                    <button onClick={onMoreClick}>
                        More
                    </button>
                </div>
            }
        </div>
    );
};
export default Users