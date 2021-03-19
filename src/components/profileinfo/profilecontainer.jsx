import {connect} from 'react-redux';
import axios from 'axios';
import {useEffect} from 'react';
import Profile from './profile';
import {profileActionCraeters} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

const ProfileContainer = (props) => {
    let userId = props.match.params['userid'] || 1;
    useEffect(() => {
        getUser();
        getPosts();
    }, []);
    const getUser = () => {
        let url = `/users/${userId}`;
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(url)
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data && response.data.data;
                let user = data.user;
                props.setUser(user);
            });
    };
    const getPosts = () => {
        let url = `/posts/${userId}`;
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get(url)
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data && response.data.data;
                let posts = data.posts;
                props.setPosts(posts);
            });
    };
    return (<Profile profileData={props.profileData}
        postsData={props.postsData}
        updateStatusTextArea={props.updateStatusTextArea}
        addPost={props.addPost}
        onPostTextAreaChanged={props.onPostTextAreaChanged} />);
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