import classes from './info.module.css';
import Status from './status/status';

const Info = (props) => {
    return (
        <div className={classes.myposts}>
            <div className={classes.avatar}>
                <img src={props.avatarSrc} />
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
            <div className={classes.description}>
                {props.descriprion}
            </div>
            <br />
            <Status statusTextAreaValue={props.statusTextAreaValue}
                updateStatusTextArea={props.updateStatusTextArea} />
        </div>
    );
}
export default Info;