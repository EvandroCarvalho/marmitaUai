import { loadingModalListRestaurants } from "./types";
import { getListOfRestaurants } from '../services/appServices'
import { restaurantsList,
    selectedRestaurant,
    selectedSize,
    meatSelected,
    complementSelected,
    saladsSelected,
    drinksSelected,
    initialStateItemsSelected } from './types'


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

export const setMeatsOnObjectItemsSelected = (meats) => {
    return {
        type: meatSelected,
        payload: meats
    }
}

export const setComplementsOnObjectSelected = (complements) => {
    return {
        type: complementSelected,
        payload: complements 
    }
}

export const setSaladsOnObjectSelected = (salads) => {
    return {
        type: saladsSelected,
        payload: salads
    }
}

export const setDrinksOnObjectSeleted = (drinks) => {
    return {
        type: drinksSelected,
        payload: drinks
    }
}

export const cleanItemsSelected = () => {
    return {
        type: initialStateItemsSelected
    }
}