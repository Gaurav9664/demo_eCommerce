import * as ActionTypes from "../ActionTypes"

const initialState = {
    data: [],
    isloading: false,
    error: null
}

export const customerReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.GET_CUSTOMER:
            return {
                ...state,
                data: action.payload
            }
        case ActionTypes.ADD_CUSTOMER:
            return {
                ...state,
                data: state.data.concat(action.payload) 
            }
        default:
            return state
    }
}