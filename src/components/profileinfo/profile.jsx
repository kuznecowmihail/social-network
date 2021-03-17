import InfoContainer from './info/infocontainer';
import PostsContainer from './posts/postscontainer';
import classes from './profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profileInfo}>
            <InfoContainer />
            <PostsContainer />
        </div>
    );
}
export default Profile;