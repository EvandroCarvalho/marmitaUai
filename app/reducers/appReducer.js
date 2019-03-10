import { 
    LOADING,
    LOADING_MODAL,
    CONNECTION_STATUS,
    LOCATION_BY_ANDROID_SUCCESS,
    LOCATION_BY_ANDROID_ERROR,
    LOCATION_BY_CEP_SUCCESS,
    LOCATION_BY_CEP_ERROR,
    LOCATION_BY_ADDRESS_SUCCESS,
    LOCATION_BY_ADDRESS_ERROR,
    } from '../actions/types'


const INITIAL_STATE = {
    modalVisible: false,
    loading: false,
    connectionInfo: '',
    errorGetLocationAdress: false,
    errorGetLocationCEP: false,
    userLocale: {
        latitude: '',
        longitude: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: 'Uberlândia',
        state: '',
        postCode: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING: 
            return { ...state, loading: true }
        case LOADING_MODAL:
            return { ...state, loading: true, modalVisible: true }
        case CONNECTION_STATUS:
            return { ...state, connectionInfo: action.payload  }
        case LOCATION_BY_ANDROID_SUCCESS:
            return { ...state,
                userLocale: { ...state.userLocale,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                },
                modalVisible: false,
                loading: false
            }
        case LOCATION_BY_ANDROID_ERROR:
            return { ...state, modalVisible: false, loading: false }
        case LOCATION_BY_ADDRESS_SUCCESS:
            return { ...state,
                loading: false,
                userLocale: { ...state.userLocale,
                    city: action.payload.city,
                    complement: action.payload.complement,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    neighborhood: action.payload.neighborhood,
                    number: action.payload.number,
                    postCode: action.payload.postCode,
                    state: action.payload.state,
                    street: action.payload.street
                },
                errorGetLocationAdress: false
            }
        case LOCATION_BY_ADDRESS_ERROR:
            return { ...state, modalVisible: false, loading: false, errorGetLocationAdress: true }   
        case LOCATION_BY_CEP_SUCCESS: 
            return { ...state,
                userLocale: { ...state.userLocale,
                    city: action.payload.city,
                    complement: action.payload.complement,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    neighborhood: action.payload.neighborhood,
                    number: action.payload.number,
                    postCode: action.payload.postCode,
                    state: action.payload.state,
                    street: action.payload.street
                },
                loading: false,
                modalVisible: false,
                errorGetLocationCEP: false
            }   
        case LOCATION_BY_CEP_ERROR:
            return { ...state, modalVisible: false, loading: false, errorGetLocationCEP: true}
        default:
            return state
    }   
}