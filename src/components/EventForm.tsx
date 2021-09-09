import React from 'react';
import { Form, Input, DatePicker, Button, Row, Select } from 'antd';

import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';

interface EventFormProps {
    guests: IUser[],
}

const EventForm: React.FC<EventFormProps> = (props) => {
    const [event, setEvent] = React.useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as IEvent);

    return (
        <Form style={{ padding: 15 }}>
           <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input 
                />
            </Form.Item>

            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
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