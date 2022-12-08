import {EventActionEnum, SetEventsAction, SetGuestAction} from "./types";
import {IUser} from "../../../Models/IUser";
import {IEvent} from "../../../Models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";


export const EventActionCreators = {
    setGuests: (payload: IUser []): SetGuestAction => ({type: EventActionEnum.SET_GUEST, payload}),
    setEvents: (payload: IEvent []): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const guests = await axios.get('./users.json')
            dispatch(EventActionCreators.setGuests(guests.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent []
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events',JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent []
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (e) {
            console.log(e)
        }

    }
}