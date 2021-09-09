import React from 'react';
import { Calendar } from 'antd';

import { IEvent } from '../models/IEvent';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = () => {
    return (
        <Calendar style={{padding: 20}} />
    );
};

export default EventCalendar;