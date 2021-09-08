import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RoutesNames } from '../router';

const AppRouter: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        isAuth ? 
        <Switch>`
            {privateRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path}
                />
            )}
            <Redirect to={RoutesNames.EVENT} />
        </Switch>
        :
       <Switch>
            {publicRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path} 
                />
            )}
            <Redirect to={RoutesNames.LOGIN} />
       </Switch>
    );
};

export default AppRouter;