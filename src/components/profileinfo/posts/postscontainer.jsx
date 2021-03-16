import Posts from './posts';
import {connect} from 'react-redux';
import {profileActionCraeters} from './../../../redux/profile-reducer';

let mapStateToProps = (state) => {
    let profileData = state.profileData;
    return {
        posts: profileData.posts,
        newPostTextAreaValue: profileData.newPostTextAreaValue,
        avatarSrc: profileData.info.avatarSrc
    };
};
const PostsContainer = connect(mapStateToProps, {
    addPost: profileActionCraeters.addPost,
    onPostTextAreaChanged: profileActionCraeters.onPostTextAreaChanged
})(Posts);
export default PostsContainer;