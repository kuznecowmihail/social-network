import classes from './user.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const changeFollowed = () => {
        props.changeFollowed(props.id);
    };
    return (
        <NavLink to={'/profile/' + props.id} >
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
        </NavLink>
    );
};
export default User;