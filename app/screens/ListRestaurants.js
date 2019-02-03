import React, { Component } from 'react'
import { View,
    Text,
    BackHandler,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions,
    Easing } from 'react-native'
import Item from '../components/ItemRestaurant'
import { ScrollView } from 'react-native-gesture-handler';
import tab from '../route/tabs'

const {width, height} = Dimensions.get('window')
class List extends Component { 

    static navigationOptions = {
        title: 'Restaurantes próximos',
        headerTitleStyle: {
            width: "90%",
            textAlign: 'center'
        },
        headerStyle: {
            backgroundColor: '#ab4949',
        },
        headerTintColor: '#fff',
        headerLeft: null,
        headerRight: (
            <TouchableOpacity
                style={{flex: 1, marginRight: 5, padding: 20, justifyContent: 'center', alignItems: 'center'}}
            >
                <Image
                    style={{width: 20, height: 20}}
                    source={require('../assets/images/login.png')}
                />
                <Text style={{color:'#fff'}} >login</Text>
            </TouchableOpacity>
        )
    }

    state = {
        lista: new Animated.ValueXY(0,0)
    }



    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        Animated.timing(this.state.lista, {
            toValue: {
                x:-500,
                y:0
            },
            duration: 1000,
          //  easing: Easing.elastic(2)
            
        }).start()
    }

    handleBackPress = () => {
        BackHandler.exitApp()
        return true
    }

    render() {
        return(
            <Animated.View
                style={[this.state.lista.getLayout(), styles.container]}
            >
            <ScrollView style={{flex: 1}}>
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
                <Item
                    restaurantName = {'Restaurante X'}
                    distance = {1}
                />
            </ScrollView>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        width: width,
        height: height,
        marginLeft: 500
    }
})

export default List