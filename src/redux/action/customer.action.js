import { fetchPostCustomer, fetchgetCustomer } from "../../common/api/customer.api"
import * as ActionTypes from "../ActionTypes"

export const getCustomer = () => (dispatch) => {
    try {
        fetchgetCustomer()
            .then((response) => dispatch({ type: ActionTypes.GET_CUSTOMER, payload: response.data }))
            .catch((error) => error.message)
    } catch (error) {
        console.log(error.message);
    }
}

export const postCustomer = (data) => (dispatch) => {
    try {
        fetchPostCustomer(data)
            .then((response) => dispatch({ type: ActionTypes.ADD_CUSTOMER, payload: response.data }))
            .catch((error) => error.message)
    } catch (error) {
        console.log(error.message);
    }
}