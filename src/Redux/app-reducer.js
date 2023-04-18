import { authIn } from './auth-reducer';

let SET_INITIALAIZED = 'SET_INITIALAIZED';

let initialState = {
        initialaized: false,
    };

export const appReducer = (state = initialState, action) => {
    switch (action.type) { 
        case SET_INITIALAIZED:
            return {
                ...state,
                initialaized: true,
            }
        default:
            return state;
    }
};


export const initialaizedSuccess = () => ({type: SET_INITIALAIZED })

export const initialaizApp = () => async (dispatch) => {
    let promise = dispatch(authIn());
   await Promise.all([promise])
        dispatch(initialaizedSuccess());
}
