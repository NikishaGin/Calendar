import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../Models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";


export const AuthActionCreators = {
    setIsAuth: (payload: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload}),
    setUsers: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string): any => async (dispatch: AppDispatch) => {

        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUsers(mockUsers))
                } else {
                    dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)

        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка'))
        }
    },
    logout: (): any => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUsers({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}