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
    modalVisible: true,
    loading: false,
    connectionInfo: '',
    userLocale: {
        latitude: '',
        longitude: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        postCode: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch(action.type) {
        case loading: 
            return { ...state, loading: true }
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
        case locationByAddressError:
            return { ...state, modalVisible: false, loading: false }   
        case getLocationByCEPSucess: 
            return { ...state, loading: false}         
        default:
            return state
    }   
}