import { profileAPI } from '../api/api';
import { FORM_ERROR } from 'final-form';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'


const initialState = {
        posts: [
            {id: 0, message: 'hi', likesCount: 5},
            {id: 1, message: 'hi', likesCount: 5},
            {id: 2, message: 'hi', likesCount: 5},
            {id: 3, message: 'hi', likesCount: 5},
            {id: 4, message: 'hi', likesCount: 5},
            {id: 5, message: 'hi', likesCount: 5}
        ],
        userProfile: null,
        newPostText: '',
        status: '',
    };

export const profileReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_POST:
            const newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newPostText,
                likesCount: 5,
                };
            return {
                ...state, 
                newPostText: '',
                posts: [...state.posts, newPost]};
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText};
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, userProfile: {...state.userProfile, photos: action.photos}}
        case UPDATE_USER_PROFILE:
            return {...state, userProfile: {...state.userProfile, ...action.data}}
        default:
            return state;
    }
};
export let newPostActionCreator = (newPostText) => {
    return ({
        type: ADD_POST,
        newPostText,
    })
};
export let setUserProfile = (userProfile) => {
    return({
        type: SET_USER_PROFILE,
        userProfile,
    })};

export const setUserStatus = (status) => {
    return ({
        type: SET_STATUS,
        status,
    })
};

export const setPhotoSuccess = (photos) => {
    return ({
        type: SAVE_PHOTO,
        photos,
    })
};

export const updateUserProfileSuccess = (data) => {
    return({
        type: UPDATE_USER_PROFILE,
        data
    })

}

export const updateUserStatus = (status) => {
    return({type: UPDATE_STATUS, status})
};


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.changeStatus(status)
    if(response.resultCode === 0){
        dispatch(updateUserStatus(status))
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.setPhoto(photo);
    if(response.resultCode === 0){
        dispatch(setPhotoSuccess(response.data.photos))
    }
}

export const setNewUserData = (data) => async (dispatch, getState) => {
    const response = await profileAPI.setNewUserData(data);
    if(response.resultCode === 0){
        dispatch(getUserProfile(getState().auth.userId))
    } else {
        console.log(FORM_ERROR)
        return {[FORM_ERROR]: response.messages}
    }
}



