import InfoContainer from './info/infocontainer';
import PostsContainer from './posts/postscontainer';
import classes from './profileinfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfo}>
            <InfoContainer />
            <PostsContainer />
        </div>
    );
}
export default ProfileInfo;