import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';

import { rules } from '../utils/rules';
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const {isLoading, error} = useTypedSelector(state => state.auth);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submit = () =>{
        dispatch(AuthActionCreators.login(username, password));
    }

    return (
        <Form
        onFinish={submit}
        >
            {error && <div style={{ color: 'red' }}>
                {error}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input 
                    value={username} 
                    onChange={evt => setUsername(evt.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input
                    type="password"
                    value={password} 
                    onChange={evt => setPassword(evt.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;