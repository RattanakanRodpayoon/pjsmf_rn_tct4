
import React, { Component } from 'react';
import { Router , Stack , Scene } from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={ false } >
                    <Scene key="login" component={ LoginPage } title="Login" initial={ true }/>
                    <Scene key="main" component={ HomePage } title="Main SMF" />
                    <Scene key="register" component={ RegisterPage } title="Register"/>
                </Stack>
            </Router>
        );
    }
}
export default Routes;
