import { newPostActionCreator, profileReducer } from "./profile-reducer";

it('new post length should be added', () => {

    let action = newPostActionCreator('bla bla');

    const state = {
        posts: [
            {id: 0, message: 'hi', likesCount: 5},
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);

});