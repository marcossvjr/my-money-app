import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import DashboardWR from '../dashboarWR/dashboardWR'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/WR" component={DashboardWR} />
        <Route path="/billingCycles" component={BillingCycle} />
        <Redirect from="*" to="/" />
    </Router>
)