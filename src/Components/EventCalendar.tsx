import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../Models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../Utils/date";

interface EventCalendarProps {
    events: IEvent []
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {

    const dateCellRender: any = (value: Moment) => {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((ev,index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        )
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};
