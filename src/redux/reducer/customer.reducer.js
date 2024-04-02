import * as ActionTypes from "../ActionTypes"

const initialState = {
    data: [],
    isloading: false,
    error: null
}

export const customerReducer = (state = initialState, action) => {
    // console.log(state);
    /* The line `console.log(state);` is logging the current state of the reducer to the console for
    debugging purposes. It helps in tracking the state changes and understanding how the state is
    being updated in response to different actions dispatched to the reducer. This can be useful for
    troubleshooting and understanding the flow of data in the application. */
    // console.log(action.payload);
    switch (action.type) {
        case ActionTypes.GET_CUSTOMER:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.ADD_CUSTOMER:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.DELETE_CUSTOMER:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.PUT_CUSTOMER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}