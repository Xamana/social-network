import { authAPI } from '../api/api'; 
import { FORM_ERROR } from 'final-form';

let SET_USER_DATA = 'SET_USER_DATA';
let GET_CAPTHA = 'GET_CAPTCHA';

let initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        captcha: null,     
    };

export const authReducer = (state = initialState, action) => {
    switch (action.type) { 
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTHA: 
            return {
                ...state,
                captcha: action.url
            }
        default:
            return state;
    }
};
export let setUserData = ( userId, email, login, isAuth ) => ({type: SET_USER_DATA,  data: { userId, email, login, isAuth } });

export const setCpatcha = ( url ) => ({type: GET_CAPTHA, url: url });

export const authIn = () => async (dispatch) => {
    const response = await authAPI.authMe();
    if(response.resultCode !== 0) return;
    let { id, email, login } = response.data;
    dispatch(setUserData(id, email, login, true));
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.resultCode === 0) {
            dispatch(authIn())
        } else if (response.resultCode === 10) {
            const data = await authAPI.getCaptcha()
                dispatch(setCpatcha(data.url))
                return {[FORM_ERROR]: response.messages}
        } else {
            return {[FORM_ERROR]: response.messages}
        }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        if(response.resultCode === 0 ) {
            dispatch(setUserData(null, null, null, false))
    }
}