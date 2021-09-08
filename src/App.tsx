import React from 'react';
import { Layout } from 'antd';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { IUser } from './models/IUser';
import { useActions } from './hooks/useActions';

import './App.css';

const App: React.FC = () => {
    const { setUser, setIsAuth } = useActions()
    React.useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({ username: localStorage.getItem('username') || '' } as IUser);
            setIsAuth(true);
        }
    }, []);

    return (
        <Layout>
          <Navbar />
          <Layout.Content>
            <AppRouter />
          </Layout.Content>
        </Layout>
    );
};

export default App;