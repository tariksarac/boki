import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserView from '../../containers/UserView/UserViewContainer'
import AdminView from '../../containers/AdminView/AdminViewContainer'


const Main = () => {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={UserView}/>
                    <Route path="/admin" component={AdminView}/>
                </Switch>
            </main>
        </div>

    )
};

export default Main