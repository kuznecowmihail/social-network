import classes from './profileheader.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.img}>
                <img src={props.avatarSrc} />
            </div>
            <div className={classes.info}>
                {props.name}
            </div>
        </div>

    );
}
export default Profile;