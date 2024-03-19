import { addrequest, deleterequest, editrequest, getRequest } from "../request"

export const fetchgetCategory = () => {
    return getRequest('category/list-category')
}