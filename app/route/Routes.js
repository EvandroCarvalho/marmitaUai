import React from 'react'
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import WelcomeScreen from '../screens/welcome'
import ListRestaurantsScreen from '../screens/listRestaurants'
import RegisterUserLocationScreen from '../screens/registerUserLocation'
import postCodeScreen from '../screens/postCode'


const stack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen 
    },
    ListRestaurants: {
        screen: ListRestaurantsScreen
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
                backgroundColor:"#f1be13"
            },
            headerTintColor: '#fff'
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
                backgroundColor:"#f1be13"
            },
            headerTintColor: '#fff'
        }
    },

}, {
  initialRouteName : 'postCode'
})


const routes = createAppContainer(stack)

export default routes