import { addrequest, deleterequest, editrequest, getRequest } from "../request"


export const fetchgetCustomer = () => {
    return getRequest('customer/get-customer')
}

export const fetchPostCustomer = (data) => {
    return addrequest('customer/create-customer', data)
}

export const fetchDeleteCustomer = (id) => {
    return deleterequest('customer/delete-customer/', id)
}

export const fetchUpdateCustomer = (id, data) => {
    return editrequest('customer/update-customer/' + id, data)
}