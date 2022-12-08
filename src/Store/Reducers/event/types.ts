import {IUser} from "../../../Models/IUser";
import {IEvent} from "../../../Models/IEvent";


export interface EventState {
    guest: IUser [],
    events: IEvent [];
}


export enum EventActionEnum {
    SET_GUEST = "SET_GUEST",
    SET_EVENTS = "SET_EVENTS",
}


export interface SetGuestAction {
    type: EventActionEnum.SET_GUEST
    payload: IUser []
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS
    payload: IEvent []
}

export type EventAction = SetGuestAction | SetEventsAction