import { NavLink } from 'react-router-dom';
import classes from './dialogitem.module.css';

const DialogItem = (props) => {
    const onLinkClick = (e) => {
        let dialogId = props.id;
        props.onDialogLinkClick(dialogId);
    };
    return (
        <NavLink activeClassName='active-item' to={"/dialogs/" + props.id} onClick={onLinkClick} >
            <div id={props.id} className={classes.dialogItem} >
                <div className={classes.avatar}>
                    <img src={props.img} />
                </div>
                <div className={classes.content}>
                    <div className={classes.name}>
                    props.name
                    </div>
                    <div className={classes.lastMessage}>
                        {props.lastMessage}
                    </div>
                </div>
            </div>
        </NavLink>);
}
export default DialogItem;