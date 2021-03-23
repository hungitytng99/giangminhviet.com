import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import HomePage from './pages/HomePage';

Home.propTypes = {};

function Home(props) {
    const match = useRouteMatch();
    const url = match.url;
    return(
        <Switch>
            <Route path={`${url}`} component={HomePage}/>
        </Switch>
    )
}

export default Home;