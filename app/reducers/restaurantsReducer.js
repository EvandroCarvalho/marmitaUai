import { restaurantsList,
    loadingModalListRestaurants,
    selectedRestaurant,
    selectedSize,
    meatSelected,
    complementSelected,
    saladsSelected,
    drinksSelected,
    initialStateItemsSelected } from '../actions/types'

const INITIAL_STATE = {
    restaurantsList: [],
    loading: false,
    modalVisible: false,
    selectedRestaurant: {},
    sizeSelected: {},
    itemsSelected: {
        meat: [],
        complement: [],
        salads: [],
        drinks: []
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case loadingModalListRestaurants:
            return {...state, loading: true, modalVisible: true}
        case restaurantsList:
            return {...state, restaurantsList: action.payload, loading: false, modalVisible: false}
        case selectedRestaurant:
            return {...state, selectedRestaurant: action.payload}
        case selectedSize:
            return { ...state, sizeSelected: action.payload}
        case meatSelected:
            return {...state, itemsSelected: {...state.itemsSelected, meat: action.payload}}
        case complementSelected:
            return {...state, itemsSelected: {...state.itemsSelected, complement: action.payload}}
        case saladsSelected:
            return {...state, itemsSelected: {...state.itemsSelected, salads: action.payload}}
        case drinksSelected: 
            return {...state, itemsSelected: {...state.itemsSelected, drinks: action.payload}}
        case initialStateItemsSelected:
            return {...state, itemsSelected: INITIAL_STATE.itemsSelected}
        default:
            return state
    }
}