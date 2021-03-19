import Info from './info/info';
import Posts from './posts/posts';
import classes from './profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profileInfo}>
            <Info avatarSrc={props.profileData.avatarSrc}
                name={props.profileData.name}
                descriprion={props.profileData.descriprion}
                statusTextAreaValue={props.profileData.statusTextAreaValue}
                updateStatusTextArea={props.updateStatusTextArea}  />
            <Posts posts={props.postsData.posts}
                newPostTextAreaValue={props.postsData.newPostTextAreaValue}
                avatarSrc={props.profileData.avatarSrc}
                addPost={props.addPost}
                onPostTextAreaChanged={props.onPostTextAreaChanged} />
        </div>
    );
}
export default Profile;