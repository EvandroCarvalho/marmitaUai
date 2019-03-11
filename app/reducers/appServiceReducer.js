import { RESTAURANTS_LIST,
    LOADING_MODAL_LIST_RESTAURANT,
    SELECTED_RESTAURANT,
    SELECTED_SIZE,
    MEAT_SELECTED,
    COMPLEMENT_SELECTED,
    SALADS_SELECTED,
    DRINKS_SELECTED,
    INITIAL_STATE_ITEMS_SELECTED,
    ORDER_TO_RESTAURANT,
    CONFIRM_ADDRESS,
    USER_AUTEHTICATION
    } from '../actions/types'

const INITIAL_STATE = {
    restaurantsList: [],
    loading: false,
    modalVisible: false,
    selectedRestaurant: {},
    sizeSelected: {},
    userAuthentication: {
        userName: '',
        password: '', 
        isAutheticated: false,
    },
    dataUser: {
        name: '',
        telephone: ''
    },
    itemsSelected: {
        selected: false,
        meats: [],
        complements: [],
        salads: [],
        drinks: []
    },
    orderToRestaurant: {},
    addressToSend: {
        city: '',
        complement: '',
        neighborhood: '',
        number: '',
        street: ''
    },
    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_MODAL_LIST_RESTAURANT:
            return {...state, loading: true, modalVisible: true}
        case RESTAURANTS_LIST:
            return {...state, restaurantsList: action.payload, loading: false, modalVisible: false}
        case SELECTED_RESTAURANT:
            return {...state, selectedRestaurant: action.payload}
        case SELECTED_SIZE:
            return { ...state, sizeSelected: action.payload}
        case MEAT_SELECTED:
            return {...state, itemsSelected: {...state.itemsSelected, meats: action.payload, selected: true}}
        case COMPLEMENT_SELECTED:
            return {...state, itemsSelected: {...state.itemsSelected, complements: action.payload, selected: true}}
        case SALADS_SELECTED:
            return {...state, itemsSelected: {...state.itemsSelected, salads: action.payload, selected: true}}
        case DRINKS_SELECTED: 
            return {...state, itemsSelected: {...state.itemsSelected, drinks: action.payload, selected: true}}
        case INITIAL_STATE_ITEMS_SELECTED:
            return {...state, itemsSelected: INITIAL_STATE.itemsSelected}
        case USER_AUTEHTICATION:
            return {...state, userAuthentication: {...state.userAuthentication, userName: action.userName, password: action.password, isAutheticated: true}}
        case ORDER_TO_RESTAURANT:
            return {...state, orderToRestaurant: action.payload}
        case CONFIRM_ADDRESS:
            return {...state,
                addressToSend: {
                    ...state.addressToSend,
                    city: action.payload.city,
                    complement: action.payload.complement,
                    neighborhood: action.payload.neighborhood,
                    number: action.payload.number,
                    street: action.payload.street
                }
            }
        default:
            return state
    }
}