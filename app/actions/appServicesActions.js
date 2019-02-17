import { loadingModalListRestaurants } from "./types";
import { getListOfRestaurants } from '../services/appServices'
import { restaurantsList, selectedRestaurant } from './types'


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
    console.log(restaurant)
    return dispatch => {
        dispatch({
            type: selectedRestaurant,
            payload: restaurant
        })
        navigation.navigate('lunchSize')
    }
}