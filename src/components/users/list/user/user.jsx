import classes from './user.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const changeFollowed = () => {
        props.changeFollowed(props.id);
    };
    return (
        <div id={props.id} className={classes.user}>
            <div className={classes.avatar}>
                <NavLink to={'/profile/' + props.id}>
                    <img src={props.img} />
                </NavLink>
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