import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreators} from "../Store/Reducers/action-creators";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}