import { newPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPosts: (text) => {
            dispatch(newPostActionCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
