import classes from './message.module.css';

const Message = (props) => {
    return ( 
        <div className={`${ classes.message } ${classes[props.direction]}`}>
            {props.message}
        </div>
    );
}
export default Message;