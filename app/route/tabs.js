import { Animated, Easing } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import FoodsItemsTab from '../screens/foodsComplements'
import React from 'react'
import DrinksItemsTab from '../screens/drinksItems'
import PayModeTab from '../screens/payMode'
import MeatsTab from '../screens/meats'
import SaladsTab from '../screens/salads'
import { Image, View } from 'react-native'
import defaultThemes from '../styles/defaultThemes';


/* navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    console.log(params.title)
    return {
    title: `${params.title}`
    }
} */

const icons = {
    meats: require('../assets/images/steak.png'),
    complements: require('../assets/images/breakfast.png'),
    salads: require('../assets/images/salad.png'),
    drinks: require('../assets/images/lemon-juice.png'),
    payMode: require('../assets/images/hand.png')
}

const componentIcon = (icons, active ) => {
    let color = defaultThemes.colors.withe
     if(active) {
        color = defaultThemes.colors.yellowTheme
    }

    return (
        <View style={{margim: 10, backgroundColor: color, borderRadius: 10}}>
                    <Image
                    style={{width: 40, height:40}}
                    source={icons}
                />
        </View>
    )
}


const routerConfig = {
    Meats: {
        screen: MeatsTab,
         navigationOptions: ({navigation}) => {
            return {
                tabBarLabel: ({focused}) => componentIcon(icons.meats, focused),
            }
        }
    },
    FoodsItems: {
        screen: FoodsItemsTab,
        navigationOptions: ({navigation}) => {
            navigation.addListener('willFocus', () => componentIcon(icons.complements, true))
            return {
                tabBarLabel: ({focused}) => componentIcon(icons.complements, focused)
            }
        },
    },
    SaladsItems: {
        screen: SaladsTab,
        navigationOptions: ({navigation}) => {
            navigation.addListener('willFocus', () => componentIcon(icons.salads, true))
            return {
                tabBarLabel: ({focused}) => componentIcon(icons.salads, focused)
            }
        },      
    },
    DrinksItems: {
        screen: DrinksItemsTab,
        navigationOptions: ({navigation}) => {
            navigation.addListener('willFocus', () => componentIcon(icons.drinks, true))
            return {
                tabBarLabel: ({focused}) => componentIcon(icons.drinks, focused)
            }
        },
    },
/*     PayMode: {
        screen: PayModeTab,
        navigationOptions: ({navigation}) => {
            navigation.addListener('willFocus', () => componentIcon(icons.payMode, true))
            return {
                tabBarLabel: ({focused}) => componentIcon(icons.payMode, focused)
            }
        },
    }, */
}

const tabBarConfig = { 
    tabBarOptions: {
       indicatorStyle: {
           backgroundColor: '#fff'
       },
       tabStyle: {
           backgroundColor:defaultThemes.colors.withe,
           padding: 5,
           margin: 5,
           height: 40,
           borderColor: '#d3d3d3',
           borderWidth: 1,
           },
       style: {
           backgroundColor: defaultThemes.colors.withe,
       },
   },
   tabBarPosition: 'bottom',
   animationEnabled:true,
   lazy: true,
   transitionConfig: ({scene}) => {
       console.log(scene.route)
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
}



  
export default createMaterialTopTabNavigator(routerConfig, tabBarConfig)