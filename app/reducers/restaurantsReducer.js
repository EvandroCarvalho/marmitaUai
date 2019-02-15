import { restaurantsList, loadingModalListRestaurants } from '../action/types'

const INITIAL_STATE = {
    restaurantsList: [],
    loading: false,
    modalVisible: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case loadingModalListRestaurants:
            return { ...state, loading: true, modalVisible: true }
        case restaurantsList:
            return { ...state, restaurantsList: action.payload, loading: false, modalVisible: false  }
        default:
            return state
    }
}