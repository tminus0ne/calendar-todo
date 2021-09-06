import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { privateRoutes, publicRoutes, RoutesNames } from '../router';

const AppRouter: React.FC = () => {
    const auth = false;

    return (
        auth ? 
        <Switch>
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