import React, {useContext} from 'react';
import List from './list/list';
import Preloader from '.././common/preloader/preloader';
import classes from './users.module.css';
import { UsersContext } from './../../context';

const Users = () => {
    const usersContext = useContext(UsersContext);
    const updateSeatchTextArea = (e) => {
        let value = e.target.value;
        usersContext.updateSeatchTextArea(value);
    };
    const onMoreClick = () => {
        usersContext.setFetching(true);
        usersContext.setMoreVisible(false);
        usersContext.setPage(usersContext.page + 1);
    };
    return (
        <div className={classes.users}>
            <div className={classes.search}>
                <input type='text' onChange={updateSeatchTextArea} value={usersContext.newSearchTextAreaValue} />
            </div>
            <List changeFollowed={usersContext.changeFollowed}
                users={usersContext.users.filter(item =>
                    item.name.toLowerCase().includes(usersContext.newSearchTextAreaValue.toLowerCase()))} />
            <Preloader isFetching={usersContext.isFetching} />
            {
                usersContext.moreVisible && 
                <div className={classes.more}>
                    <button onClick={onMoreClick}>More</button>
                </div>
            }
        </div>
    );
};
export default Users