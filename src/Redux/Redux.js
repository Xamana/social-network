import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';


const store = {
	_state: {
		postsPage: {
			posts: [
				{id: 0, message: 'hi', likesCount: 5},
				{id: 1, message: 'hi', likesCount: 5},
				{id: 2, message: 'hi', likesCount: 5},
				{id: 3, message: 'hi', likesCount: 5},
				{id: 4, message: 'hi', likesCount: 5},
				{id: 5, message: 'hi', likesCount: 5}
			],
			newPostText: '',
			},	
			
			dialogsPage: {
				arr: [
					{id: 1, name: 'michael'},
					{id: 2, name: 'alex'},
					{id: 3, name: 'den'},
					{id: 4, name: 'sasha'},
					{id: 5, name: 'danny'},
					{id: 6, name: 'dima'},
					{id: 6, name: 'dima'}
					],
				messages: [
					{id: 1, message: 'michael'},
					{id: 2, message: 'alex'},
					{id: 3, message: 'en'},
					{id: 4, message: 'sasha'},
					{id: 5, message: 'dima'},
					{id: 6, message: 'ima'}
					],
				newMessageText: '',


				},		  
	},

	_rerenderEntireTree() {},
	subscribe(observer) {
		this._rerenderEntireTree = observer;
	},
	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.postsPage = profileReducer(this._state.postsPage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._rerenderEntireTree(this._state);
	}
};



 

export default store;