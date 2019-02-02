import React from 'react'
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import WelcomeScreen from '../screens/Welcome'
import ListRestaurants from '../screens/ListRestaurants'
import RegisterUserLocationScreen from '../screens/RegisterUserLocation'


const stack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen 
    },
    ListRestaurants: {
        screen: ListRestaurants,
        navigationOptions: {
            title: 'Retaurantes próximos',
            headerTitleStyle: {
                width: "90%",
                textAlign: 'center'
            },
            headerStyle: {
                backgroundColor: '#e00'
            },
            headerTintColor: '#aee',
            headerLeft: null
        }
    },
    RegisterUserLocationScreen: {
        screen: RegisterUserLocationScreen,
        navigationOptions: {
            title:'Endereço para entrega',
            headerLeft: null,
            headerTitleStyle: {
                width: "90%",
                textAlign: 'center'
            },
            headerStyle: {
                backgroundColor:"#e00"
            },
            headerTintColor: '#aee'
        }
    }
}, {
    initialRouteKey : 'Welcome'
})


const routes = createAppContainer(stack)

export default routes