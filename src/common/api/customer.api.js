import { addrequest, getRequest } from "../request"


export const fetchgetCustomer = () => {
    return getRequest('customer/get-customer')
}

export const fetchPostCustomer = (data) => {
    return addrequest('customer/create-customer', data)
}