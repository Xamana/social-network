import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
      dialogsPage: dialogsReducer,
      profilePage: profileReducer, 
      usersPage: usersReducer, 
      auth: authReducer, 
      app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;