import React, {useState} from 'react';
import List from './list/list';
import Preloader from '.././common/preloader/preloader';
import classes from './users.module.css';

const Users = (props) => {
    const [isFetching, setFetching] = useState(false);
    const [moreVisible, setMoreVisible] = useState(true);
    const updateSeatchTextArea = (e) => {
        let value = e.target.value;
        props.updateSeatchTextArea(value);
    };
    const onMoreClick = () => {
        setFetching(true);
        setMoreVisible(false);
        props.getUsers(props.page, setFetching, setMoreVisible);
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
            <Preloader isFetching={isFetching} />
            {
                moreVisible && 
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