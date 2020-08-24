import {REGISTER,LOGIN, LOGOUT} from '../action';

const initialState = []

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REGISTER:
            return {...state, user:actions.payload}
        case LOGIN:
            return {...state, user:actions.payload}
        case LOGOUT:
            return initialState
        default:
            return state
    }
}