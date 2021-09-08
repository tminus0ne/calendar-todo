import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Row } from 'antd';

import { RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: React.FC = () => {
    const history = useHistory();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch()

    return (
        <Layout.Header>
            <Row justify="end" align="middle">
                {isAuth ?
                <>
                    <div style={{ color: 'white' }}>
                        {user.username}
                    </div>
                    <Menu theme="dark" mode="vertical" selectable={false}>
                        <Menu.Item 
                            onClick={() => dispatch(AuthActionCreators.logout())} 
                            key={1}
                        >
                            Logout
                        </Menu.Item>
                    </Menu>
                </>
                :
                <Menu theme="dark" mode="vertical" selectable={false}>
                    <Menu.Item 
                        onClick={() => history.push(RoutesNames.LOGIN)} 
                        key={1}
                    >
                        Login
                    </Menu.Item>
                </Menu>
                } 
            </Row>
            
        </Layout.Header>
    );
};

export default Navbar;