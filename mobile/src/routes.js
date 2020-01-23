import { createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigation({
        Main: {
            screen: Main,
            navigationOptions: {
                title:'DevRadar',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title:'Perfil no Github',
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40E7',
            },
        },
    })
);

export default Routes;