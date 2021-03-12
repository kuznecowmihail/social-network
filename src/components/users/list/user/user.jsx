import classes from './user.module.css';
import React from 'react';

const User = (props) => {
    const changeFollowed = () => {
        props.changeFollowed(props.id);
    };
    return (
        <div id={props.id} className={classes.user}>
            <div className={classes.avatar}>
                <img src={props.img} />
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
            <div className={classes.followed}>
                <button onClick={changeFollowed}>{props.followed ? 'remove' : 'add'}</button>
            </div>
        </div>
    );
};
export default User;