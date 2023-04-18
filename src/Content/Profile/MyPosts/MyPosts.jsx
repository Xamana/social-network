import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import TextInput from '../../../common/TextInput/TextInput';
import { maxLength, require, combineValidators } from '../../../utils/validators/validators';

const MyProfile = ( props ) => {

    const postsElements = [...props.posts].reverse().map( (post) => <Post key={post.id} message={post.message} likesCount={post.likesCount}></Post>);
    
    return (
        <div>
            myProfile
            <div>
                <Form 
                    onSubmit={values => props.addNewPosts(values.postMessage)}
                    render={({ handleSubmit }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <TextInput name='postMessage' placeholder='введите сообщение' validate={combineValidators(require, maxLength(10))}/>
                                <button type='submit'>Add post</button>
                            </form>
                            
                        )
                    }}
                />    
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyProfile;
