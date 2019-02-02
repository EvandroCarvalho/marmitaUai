import React, { Component } from 'react'
import { View, Text, BackHandler } from 'react-native'
import Item from '../components/ItemRestaurant'
import { ScrollView } from 'react-native-gesture-handler';

class List extends Component { 


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        BackHandler.exitApp()
        return true
    }

    render() {
        return(
            <ScrollView>
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

        )
    }
}

export default List