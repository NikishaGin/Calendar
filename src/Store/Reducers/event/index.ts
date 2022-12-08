import {EventAction, EventActionEnum, EventState} from "./types";


const initialState: EventState = {
    guest: [],
    events: [],
}



export const eventReducer = (state = initialState, action: EventAction ): EventState => {
    switch (action.type) {
        case EventActionEnum.SET_GUEST:
            return {...state, guest: action.payload}
        case EventActionEnum.SET_EVENTS:
            return  {...state, events: action.payload}
        default:
            return state
    }
}