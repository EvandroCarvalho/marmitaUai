import { loadingModalListRestaurants } from "./types";
import { getListOfRestaurants } from '../services/appServices'
import { restaurantsList, selectedRestaurant, selectedSize } from './types'


export const getRestaurantsList = (userLocation) => {
    return async dispatch => {
        dispatch({
            type: loadingModalListRestaurants
        })
        let response = await getListOfRestaurants(userLocation)
        dispatch({
            type: restaurantsList,
            payload: response
        })
    }
}

export const setSelectedRestaurant = (restaurant, {navigation}) => {
    return dispatch => {
        dispatch({
            type: selectedRestaurant,
            payload: restaurant
        })
        navigation.navigate('lunchSize')
    }
}

export const setSizeChosen = (lunchSize, {navigation, selectedRestaurant}) => {
    return dispatch => {
        dispatch({
            type: selectedSize,
            payload: lunchSize
        })
        navigation.navigate('foodsItems', {
            title: selectedRestaurant.nome
        })

    }
}