import Info from './info/info';
import Posts from './posts/posts';
import classes from './profile.module.css';
import { ProfileContext } from '../../context';
import { useContext } from 'react';

const Profile = () => {
    const profileContext = useContext(ProfileContext);
    const profileData = profileContext.profileData;
    const postsData = profileContext.postsData;
    debugger;
    return (
        <div className={classes.profileInfo}>
            <Info avatarSrc={profileData.avatarSrc}
                name={profileData.name}
                descriprion={profileData.descriprion}
                statusTextAreaValue={profileData.statusTextAreaValue}
                updateStatusTextArea={profileContext.updateStatusTextArea}  />
            <Posts posts={profileContext.postsData.posts}
                newPostTextAreaValue={postsData.newPostTextAreaValue}
                avatarSrc={profileData.avatarSrc}
                addPost={profileContext.addPost}
                onPostTextAreaChanged={profileContext.onPostTextAreaChanged} />
        </div>
    );
}
export default Profile;