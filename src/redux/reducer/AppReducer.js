import { REGISTRATION, USER } from "../action/ActionTypes";

const initialState = {
    user: null,
    registration: {},
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER:
            let newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REGISTRATION: {
            let newState = Object.assign({}, state)
            newState.registration = { ...action.payload }
            return newState
        }
        default:
            return state;
    }
};

export default appReducer;