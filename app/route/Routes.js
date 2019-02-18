import React from 'react'
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import WelcomeScreen from '../screens/welcome'
import ListRestaurantsScreen from '../screens/listRestaurants'
import RegisterUserLocationScreen from '../screens/locationByAdress'
import postCodeScreen from '../screens/locationBypostCode'
import LunchSizeScreen from '../screens/lunchSize'
import FoodsItemsScreen from '../screens/foodsItems'


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
        },
    },
    lunchSize: {
        screen: LunchSizeScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTintColor: '#f1be13',
            headerStyle: {
                backgroundColor: '#fff',
                elevation: 0
            }
        }
    },
    foodsItems: {
        screen: FoodsItemsScreen,
        navigationOptions: {
            headerTitleStyle: {
                width: "90%",
                textAlign: 'center'
            },
            headerStyle: {
                backgroundColor:"#fff"
            },
            headerTintColor: '#f1be13'
        },

    }

}, {
 // initialRouteName : 'lunchSize'
})


const routes = createAppContainer(stack)    

export default routes