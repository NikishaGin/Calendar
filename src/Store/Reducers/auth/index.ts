export type AuthAction = authType

type authState = {
    isAuth: boolean
}

const initialState: authState = {
    isAuth: false
}

export const authReducers = (state = initialState, action: AuthAction): authState => {
    switch (action.type) {
        case "SET_AUTH": {
            return {...state , isAuth: action.payload}
        }
        default:
            return state
    }
}



export type authType = ReturnType<typeof authAC>
export const authAC = (payload: boolean) => {
    return {type: 'SET_AUTH',payload} as const
}