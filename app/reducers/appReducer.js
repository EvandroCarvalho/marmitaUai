import { 
    loading,
    loadingModal,
    connectionStatus,
    locationByAndroidSucess,
    locationByAndroidError,
    locationByCEPSucess,
    locationByCEPError,
    locationByAddressSucess,
    locationByAddressError
         } from '../action/types'


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
        city: '',
        state: '',
        country: '',
        postCode: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case loading: 
            return { ...state, loading: true }
        case loadingModal:
            return { ...state, loading: true, modalVisible: true }
        case connectionStatus:
            return { ...state, connectionInfo: action.payload  }
        case locationByAndroidSucess:
            return { ...state,
                userLocale: { ...state.userLocale,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                },
                modalVisible: false,
                loading: false
            }
        case locationByAndroidError:
            return { ...state, modalVisible: false, loading: false }
        case locationByAddressSucess:
            return { ...state,
                loading: false,
                userLocale: { ...state.userLocale,
                    city: action.payload.city,
                    complement: action.payload.complement,
                    country: action.payload.country,
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
        case locationByAddressError:
            return { ...state, modalVisible: false, loading: false, errorGetLocationAdress: true }   
        case locationByCEPSucess: 
            return { ...state,
                userLocale: { ...state.userLocale,
                    city: action.payload.city,
                    complement: action.payload.complement,
                    country: action.payload.country,
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
        case locationByCEPError:
            return { ...state, modalVisible: false, loading: false, errorGetLocationCEP: true}
        default:
            return state
    }   
}