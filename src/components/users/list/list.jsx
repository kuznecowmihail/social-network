import React from 'react';
import User from './user/user';
import classes from "./list.module.css";

const List = (props) => {
    return (
        <div className={classes.userList}>
            {
                props.users.map(data => {
                    return (
                        <User key={data.id}
                            id={data.id}
                            followed={data.followed}
                            name={data.name}
                            img={data.img}
                            changeFollowed={props.changeFollowed} />
                    );
                })
            }
        </div>
    );
};
export default List