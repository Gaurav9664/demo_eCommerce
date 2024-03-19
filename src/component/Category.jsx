import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getCategory } from "../redux/action/category.action";


function Category() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    return (
        <h1>Category</h1>
    )
}

export default Category