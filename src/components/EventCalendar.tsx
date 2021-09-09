import React from 'react';
import { Calendar } from 'antd';
import { Moment } from 'moment';

import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {
    
    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(
            evt => evt.date === formatedDate,
        );

        return (
            <div>
                {currentDayEvents.map((evt, index) =>
                    <div key={index}>{evt.description}</div>    
                )}
            </div>
        );
      }

    return (
        <Calendar
        dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;