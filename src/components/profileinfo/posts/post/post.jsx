import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.img} src={props.avatarSrc} />
            <div>{props.text}</div>
            <div>
                <span>{props.likesCount || 0} likes</span>
            </div>
        </div>
    );
}
export default Post;