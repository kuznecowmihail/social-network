import classes from './posts.module.css';
import Post from './post/post';
import React from 'react';

const Posts = (props) => {
    const addPost = () => {
        props.addPost();
    };
    const onPostTextAreaChanged = (event) => {
        props.onPostTextAreaChanged(event.target.value);
    };
    return (
        <div className={classes.myposts}>
            <div>
                <div>
                    <textarea placeholder='What is new?'
                        onChange={onPostTextAreaChanged}
                        value={props.newPostTextAreaValue} />
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <h3>My posts:</h3>
            {
                props.posts.map((data) => {
                    data.avatarSrc = props.avatarSrc;
                    return (<Post key={data.id}
                        text={data.text}
                        likesCount={data.likesCount}
                        avatarSrc={data.avatarSrc} />);
                })
            }
        </div>
    );
}
export default Posts;