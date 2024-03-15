import { fetchgetCustomer } from "../../common/api/customer.api"
import * as ActionTypes from "../ActionTypes"

export const getCustomer = () => () => {
    try {
        fetchgetCustomer()
            .then((response) => dispatch({ type: ActionTypes.GET_CUSTOMER, payload: response.data }))
            .catch((error) => showErroeAlert(error.message))
    } catch (error) {
        console.log(error.message);
    }
}