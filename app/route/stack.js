import { createStackNavigator ,createAppContainer } from 'react-navigation'
import WelcomeScreen from '../screens/welcome'
import ListRestaurantsScreen from '../screens/listRestaurants'
import RegisterUserLocationScreen from '../screens/locationByAdress'
import postCodeScreen from '../screens/locationBypostCode'
import LunchSizeScreen from '../screens/lunchSize'

import defaultThemes from '../styles/defaultThemes';


const stack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen 
    },
    ListRestaurants: {
        screen: ListRestaurantsScreen,
    },
    RegisterUserLocation: {
        screen: RegisterUserLocationScreen,
        navigationOptions: {
            title:'Sua localização',
            headerLeft: null,
            headerTitleStyle: {
                width: "90%",
                textAlign: 'center'
            },
            headerStyle: {
                backgroundColor:defaultThemes.colors.yellowTheme
            },
            headerTintColor: defaultThemes.colors.withe
        }
    },
    postCode: {
        screen: postCodeScreen,
        navigationOptions: {
            title:'Sua localização',
            headerLeft: null,
            headerTitleStyle: {
                width: "90%",
                textAlign: 'center'
            },
            headerStyle: {
                backgroundColor:defaultThemes.colors.yellowTheme
            },
            headerTintColor: defaultThemes.colors.withe
        },
    },
    lunchSize: {
        screen: LunchSizeScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: defaultThemes.colors.withe
            },
            headerTintColor: defaultThemes.colors.yellowTheme,
            headerStyle: {
                backgroundColor: defaultThemes.colors.withe,
                elevation: 0
            }
        }
    }
})

export default stack