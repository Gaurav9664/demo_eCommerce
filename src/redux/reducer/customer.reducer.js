import * as ActionTypes from "../ActionTypes"

const initialState = {
    data: [],
    isloading: false,
    error: null
}

export const customerReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action.payload);
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