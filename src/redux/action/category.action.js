import { fetchgetCategory } from "../../common/api/category.api";
import * as ActionTypes from "../ActionTypes"

export const getCategory = () => (dispatch) => {
    try {
        fetchgetCategory()
            .then((response) => dispatch({ type: ActionTypes.GET_CATEGORY, payload: response.data }))
            .catch((error) => error.message)
    } catch (error) {
        console.log(error.message);
    }
}