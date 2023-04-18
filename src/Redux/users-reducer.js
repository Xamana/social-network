import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_LOADER = 'TOOGLE_IS_LOADER';
const TOOGTE_IS_FETCHING_DATA = 'TOOGTE_IS_FETCHING_DATA';

let initialState = {
        users: [],
        currentPage: 1,
        pageSize: 5,
        totalUsersCount: 20,
        isLoading: false,
        followongInProgress: [],
        
    };

export const usersReducer = (state = initialState, action) => {
    switch (action.type) { 
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true,
                        }
                    } 
                    return user;
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {
                                ...user, followed: false,
                            }
                        } 
                        return user;
                    })
                }   
            case SET_USERS: 
                return {...state, users: action.users};
            case SET_CURRENT_PAGE: 
                return {...state, currentPage: action.currentPage};
            case SET_TOTAL_USERS_COUNT: 
                return {...state, totalUsersCount: action.usersCount};
            case TOOGLE_IS_LOADER: 
                return {...state, isLoading: action.isLoader};
            case TOOGTE_IS_FETCHING_DATA: 
                return {...state, followongInProgress: action.isFetching 
                    ?  [...state.followongInProgress, action.userId]
                    : [...state.followongInProgress.filter(id => id!== action.userId)]
                }
        default:
            return state;
    }
};


export const followSuccess = (userId) => {
    return ({
        type: FOLLOW,
        userId: userId,
    })
};

export const unFollowSuccess = (userId) => { 
    return ({
        type: UNFOLLOW,
        userId: userId,
    })
};

export const setUsers = (users) => {
    return ({
        type: SET_USERS,
        users: users,
    })
}

export const setCurrentPage = (page) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage: page,
        
    })
}

export const setTotalCount = (total) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        usersCount: total,
    })
}

export const toogleIsLoader = (isLoader) => {
    return ({
        type: TOOGLE_IS_LOADER,
        isLoader: isLoader,
    })
    
}

export const toogleIsFetchingData = (isFetching, userId) => {
    return ({
        type: TOOGTE_IS_FETCHING_DATA,
        isFetching: isFetching,
        userId: userId,
    })
}


export const getUsers = (pageSize, currentPage) => async (dispatch) => {
        dispatch(toogleIsLoader(true))
        const response = await usersAPI.getUsers(pageSize, currentPage)
        dispatch(toogleIsLoader(false))
        dispatch(setUsers(response.items));
        dispatch(setTotalCount(response.totalCount));
}

export const changePage = (pageSize, currentPage) => async (dispatch) => {
        dispatch(toogleIsLoader(true));
        dispatch(setCurrentPage(currentPage));
        const response = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toogleIsLoader(false));
        dispatch(setUsers(response.items));
}
    
export const follow = (userId) => async (dispatch) => {
    dispatch(toogleIsFetchingData(true, userId));                                           
    const response = await usersAPI.followUser(userId);
    if(response.resultCode === 0) dispatch(followSuccess(userId));
    dispatch(toogleIsFetchingData(false, userId));
}


export const unFollow = (userId) => async (dispatch) => {
    dispatch(toogleIsFetchingData(true, userId));                                           
    const response = await usersAPI.unFollowUser(userId);
    if(response.resultCode === 0) dispatch(unFollowSuccess(userId));
    dispatch(toogleIsFetchingData(false, userId));
}


