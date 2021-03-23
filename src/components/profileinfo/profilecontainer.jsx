import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { ProfileContext } from '../../context';
import * as axioshelper from '../../axioshelper/axioshelper';
import { profileActionCraeters } from '../../redux/profile-reducer';

const ProfileContainer = (props) => {
    let userId = props.match.params['userid'] || 1;
    useEffect(() => {
        getUser();
        getPosts();
    }, []);
    const getUser = () => {
        let url = `/users/${userId}`;
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let user = data.user;
            props.setUser(user);
        });
    };
    const getPosts = () => {
        let url = `/posts/${userId}`;
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let posts = data.posts;
            props.setPosts(posts);
        });
    };
    return (
        <ProfileContext.Provider value={props}>
            <Profile />
        </ProfileContext.Provider>);
}
const mapStateToProps = (state) => {
    let profileData = state.profileData;
    return {
        profileData: {
            avatarSrc: profileData.info.img,
            name: profileData.info.name,
            descriprion: profileData.info.descriprion,
            statusTextAreaValue: profileData.statusTextAreaValue
        },
        postsData: {
            posts: profileData.posts,
            newPostTextAreaValue: profileData.newPostTextAreaValue
        }
    }
}
export default connect(mapStateToProps, {
    updateStatusTextArea: profileActionCraeters.updateStatusTextArea,
    addPost: profileActionCraeters.addPost,
    onPostTextAreaChanged: profileActionCraeters.onPostTextAreaChanged,
    setUser: profileActionCraeters.setUser,
    setPosts: profileActionCraeters.setPosts
})(withRouter(ProfileContainer));