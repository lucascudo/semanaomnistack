import { createAppContainer } from 'react-nabigation';
import { createStackNavigation } from 'react-nabigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigation({
        Main,
        Profile,
    })
);

export default Routes;