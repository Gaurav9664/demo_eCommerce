import { getRequest } from "./request"


export const fetchgetCustomer = () => {
    return getRequest('customer/get-customer')
}