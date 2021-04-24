import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNavBar from './Navbar/SideNavBar';
import Home from './Pages/Home';

export default function MasterBar() {
    return (
        <>
            <Router>
                <SideNavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </>
    )
}
