import { LOADING_MODAL_LIST_RESTAURANT } from "./types";
import { getListOfRestaurants } from '../services/appServices'
import { RESTAURANTS_LIST,
    SELECTED_RESTAURANT,
    SELECTED_SIZE,
    MEAT_SELECTED,
    COMPLEMENT_SELECTED,
    SALADS_SELECTED,
    DRINKS_SELECTED,
    INITIAL_STATE_ITEMS_SELECTED,
    CREATE_USER } from './types'
import {AsyncStorage} from 'react-native';

export const getRestaurantsList = (userLocation) => {
    return async dispatch => {
        dispatch({
            type: LOADING_MODAL_LIST_RESTAURANT
        })
        let response = await getListOfRestaurants(userLocation)
        dispatch({
            type: RESTAURANTS_LIST,
            payload: response
        })
    }
}

export const setSelectedRestaurant = (restaurant, {navigation}) => {
    return dispatch => {
        dispatch({
            type: SELECTED_RESTAURANT,
            payload: restaurant
        })
        navigation.navigate('lunchSize')
    }
}

export const setSizeChosen = (lunchSize, {navigation, selectedRestaurant}) => {
    return dispatch => {
        dispatch({
            type: SELECTED_SIZE,
            payload: lunchSize
        })
        navigation.navigate('foodsItems', {
            title: selectedRestaurant.nome
        })
    }
}

export const setMeatsOnObjectItemsSelected = (meats) => {
    return {
        type: MEAT_SELECTED,
        payload: meats
    }
}

export const setComplementsOnObjectSelected = (complements) => {
    return {
        type: COMPLEMENT_SELECTED,
        payload: complements 
    }
}

export const setSaladsOnObjectSelected = (salads) => {
    return {
        type: SALADS_SELECTED,
        payload: salads
    }
}

export const setDrinksOnObjectSeleted = (drinks) => {
    return {
        type: DRINKS_SELECTED,
        payload: drinks
    }
}

export const cleanItemsSelected = () => {
    return {
        type: INITIAL_STATE_ITEMS_SELECTED
    }
}

export const createUser = (dataUser, navigation) => {
    return dispatch => {
        dispatch({
            type: CREATE_USER,
            payload: dataUser
        })
        navigation.navigate('confirm')
    }
}

export const authentication = (datauser, {navigation}) => {
    console.log(datauser)
    return dispatch => {
            navigation.navigate('confirm')
    }
}