import React from 'react'
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import {Animated, Easing} from 'react-native'
import WelcomeScreen from '../screens/welcome'
import ListRestaurantsScreen from '../screens/listRestaurants'
import RegisterUserLocationScreen from '../screens/locationByAdress'
import postCodeScreen from '../screens/locationBypostCode'
import LunchSizeScreen from '../screens/lunchSize'

import tabNavigationStack from './tabs'
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
    },
    foodsItems: {
        screen: tabNavigationStack,
        navigationOptions: ({navigation}) => {
            return {
                title: navigation.state.params.title,
                headerTitleStyle: {
                    width: "90%",
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor:defaultThemes.colors.withe,
                    elevation: 0
                },
                headerTintColor: defaultThemes.colors.yellowTheme,
            }
        },
    },
}, {
    ///initialRouteName : 'postCode'
    transitionConfig: ({scene}) => {
        if(scene.route.index) {
            return {
            transitionSpec: {
                duration: 5000,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                },    
            }
        }
    },
    tabBarOnPress: () => console.log('press')
})


const routes = createAppContainer(stack)    

export default routes