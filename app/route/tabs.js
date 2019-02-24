 import { createMaterialTopTabNavigator, createAppContainer, NavigationScene } from 'react-navigation'
import FoodsItemsTab from '../screens/foodsItems'
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
        <View style={{backgroundColor: color, padding: 20}}>
                    <Image
                    style={{width: 40, height:37}}
                    source={icons}
                />
        </View>
    )
}


const TabNavigator = createMaterialTopTabNavigator({
    Meats: {
        screen: MeatsTab,
         navigationOptions: {
            tabBarLabel: () => componentIcon(icons.meats, true)
        }
    },
    FoodsItems: {
        screen: FoodsItemsTab,
        navigationOptions: {
            tabBarOnPress: ({navigation, defaultHandler}) => navigation = null ,
            tabBarLabel: () => componentIcon(icons.complements, navigation.state.params.active)
        },
    },
    Salads: {
        screen: SaladsTab,
        navigationOptions: {
            tabBarLabel: componentIcon(icons.salads)
        }
    },
    DrinksItems: {
        screen: DrinksItemsTab,
        navigationOptions: {
            tabBarLabel: componentIcon(icons.drinks)
        }
    },
    PayMode: {
        screen: PayModeTab,
        navigationOptions: {
            tabBarLabel: componentIcon(icons.payMode)
        }
    },
  },
  { 
     tabBarOptions: {
        tabStyle: {
            backgroundColor:defaultThemes.colors.withe,
            padding: 0,
            margin: 0,
            height: 50
            },
        style: {
            backgroundColor: defaultThemes.colors.withe,
        },
    }, 
    transitionConfig: () => ({
        transitionSpec: {
          duration: 5000,
        }
      }),
});
  
export default createAppContainer(TabNavigator);