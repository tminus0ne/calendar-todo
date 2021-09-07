import React from 'react';
import { useHistory } from 'react-router';
import { Layout, Menu, Row } from 'antd';

import { RoutesNames } from '../router';

const Navbar: React.FC = () => {
    const history = useHistory();

    const auth = true;

    return (
        <Layout.Header>
            <Row justify="end" align="middle">
                {auth ?
                <>
                    <div style={{ color: 'white' }}>
                        USERNAME
                    </div>
                    <Menu theme="dark" mode="vertical" selectable={false}>
                        <Menu.Item 
                            onClick={() => console.log('Logout')} 
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