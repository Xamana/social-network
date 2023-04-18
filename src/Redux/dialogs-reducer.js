import { act } from "react-dom/test-utils";

const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

let initialState = {
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
 };


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText,
            };

        default:
             return state;
    }
};


export let changeNewMessageActionCreator = (messageText) => {
	return ({
		type: CHANGE_NEW_MESSAGE_TEXT,
		messageText: messageText,
	})
};

export let newMessageActionCreator = (newMessage) => {
	return ({
		type: NEW_MESSAGE,
		newMessage: newMessage,
	})
};