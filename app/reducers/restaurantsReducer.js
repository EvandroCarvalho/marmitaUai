import { restaurantsList,
    loadingModalListRestaurants,
    selectedRestaurant,
    selectedSize } from '../actions/types'

const INITIAL_STATE = {
    restaurantsList: [],
    loading: false,
    modalVisible: false,
    selectedRestaurant: {},
    sizeSelected: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case loadingModalListRestaurants:
            return { ...state, loading: true, modalVisible: true }
        case restaurantsList:
            return { ...state, restaurantsList: action.payload, loading: false, modalVisible: false  }
        case selectedRestaurant:
            return { ...state, selectedRestaurant: action.payload }
        case selectedSize:
            return { ...state, sizeSelected: action.payload }
        default:
            return state
    }
}