import { loadingModalListRestaurants } from "./types";
import { getListOfRestaurants } from '../service/appServices'
import { restaurantsList } from './types'
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