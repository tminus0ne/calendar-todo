import React from 'react';
import { Form, Input, DatePicker, Button, Row, Select } from 'antd';

import { rules } from '../utils/rules';

const EventForm: React.FC = () => {
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

            <Select>
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="disabled" disabled>
                    Disabled
                </Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>

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