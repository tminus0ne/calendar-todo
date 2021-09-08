import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';

import { rules } from '../utils/rules';
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const submit = () =>{
        dispatch(AuthActionCreators.login('user', '123'));
    }

    return (
        <Form
        onFinish={submit}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;