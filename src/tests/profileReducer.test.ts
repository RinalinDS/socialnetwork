import {addPostAC, deletePostAC, profileReducer, profileReducerStateType, profileType} from '../redux/profileReducer';

let state: profileReducerStateType

beforeEach(() => {
    state = {
        posts: [
            {id: 1, message: "General Kenobi!", likesCount: 7},
            {id: 2, message: "Hello There", likesCount: 10},
            {id: 3, message: "YOU WERE MY BROTHER ANAKIN", likesCount: 141},
        ],
        profile: {} as profileType,
        status: ''
    }
})

test('length should be equal 4', () => {

    const newPost = 'i have waited for you Obi-wan'

    const newState = profileReducer(state, addPostAC(newPost))

    expect(newState.posts.length).toBe(4)
})

test('new post message  should be correct', () => {

    const newPost = 'i have waited for you Obi-wan'

    const newState = profileReducer(state, addPostAC(newPost))

    expect(newState.posts[3].message).toBe('i have waited for you Obi-wan')
})


it('correct message should be deleted', () => {



    const newState = profileReducer(state, deletePostAC(1))

    expect(newState.posts.length).toBe(2)
})