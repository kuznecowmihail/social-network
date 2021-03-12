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
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(profileActionCraeters.addPostActionCreater());
        },
        onPostTextAreaChanged: (value) => {
            dispatch(profileActionCraeters.updatePostActionCreater(value));
        }
    };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;