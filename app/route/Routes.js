import React from 'react'
import { createStackNavigator ,createAppContainer } from 'react-navigation'
import {Animated, Easing} from 'react-native'
import WelcomeScreen from '../screens/welcome'
import ListRestaurantsScreen from '../screens/listRestaurants'
import postCodeScreen from '../screens/locationBypostCode'
import LunchSizeScreen from '../screens/lunchSize'
import LoginScreen from '../screens/login'
import RegisterScreen from '../screens/register'
import tabNavigationStack from './tabs'
import locationByAddressScreen from '../screens/locationByDataAddress'
import ForgotPasswordScreen from '../screens/forgotPassword'
import ConfirmScreen from '../screens/confirm'
import ShoppingCartScreen from '../screens/shoppingCart'

import defaultThemes from '../styles/defaultThemes'


const stack = createStackNavigator({
    welcome: {
        screen: WelcomeScreen 
    },
    listRestaurants: {
        screen: ListRestaurantsScreen,
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
    locationByAddress: {
        screen: locationByAddressScreen,
        navigationOptions: {
            title:'Sua localização',
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
    login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    backgroundColor:defaultThemes.colors.withe,
                    elevation: 0
                },
                headerTintColor: defaultThemes.colors.yellowTheme,
            }
        },
    },
    register: {
        screen: RegisterScreen,
        key: 1,
        navigationOptions: {
            title: "Cadastro",
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
    forgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            title: "Esqueci minha senha",
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
    confirm: {
        screen: ConfirmScreen,
        navigationOptions: {
            title: null,
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
    shoppingCart: {
        screen: ShoppingCartScreen,
        navigationOptions: {
            title: null,
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
    }
}, {
 // initialRouteName : 'listRestaurants',
/*     transitionConfig: ({scene}) => {
        if(scene.route.index) {
            return {
            transitionSpec: {
                duration: 5000,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                },    
            }
        }
    }, */
})


const routes = createAppContainer(stack)    

export default routes