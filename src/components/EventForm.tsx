import React from 'react';
import { Form, Input, DatePicker, Button, Row, Select } from 'antd';
import { Moment } from 'moment';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { rules } from '../utils/rules';
import { formatDate } from '../utils/date';

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void,
}

const EventForm: React.FC<EventFormProps> = (props) => {
    const [event, setEvent] = React.useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as IEvent);
    const { user } = useTypedSelector(state => state.auth)

    const selectDate =(date: Moment | null) => {
        if(date) {
            setEvent({ ...event, date: formatDate(date.toDate()) })
        }
    }

    const submitForm = () => {
        props.submit({ ...event, author: user.username });
    }

    return (
        <Form 
        onFinish={submitForm}
        style={{ padding: 15 }}
        >
           <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                value={event.description}
                onChange={evt => setEvent(
                    { ...event, description: evt.target.value }
                )}
                />
            </Form.Item>

            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required(), rules.isDateAfter(
                    `Can't create event in the past`
                )]}
            >
                <DatePicker
                    onChange={date => selectDate(date)}
                />
            </Form.Item>

            <Form.Item
                label="Event creator"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent(
                    { ...event, guest }
                    )}>
                    {props.guests.map(guest => 
                        <Select.Option 
                            value={guest.username} 
                            key={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>

            <Row justify="end">
                <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;