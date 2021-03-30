import classes from './user.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axioshelper from '../../../../axioshelper/axioshelper';

const User = (props) => {
    const changeFollowed = () => {
        let url = `/follow/${props.id}`;
        let app = axioshelper.getApp();
        app.put(url).then(response => {
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            props.changeFollowed({ userId: props.id, followed: data.followed });
        });
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