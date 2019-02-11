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
    region: '',
    modalVisible: true,
    loading: false,
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
    switch(action.type) {
        case loading: 
            return { ...state, loading: true }
        case locationByAndroidSucess:
            return { ...state, region: action.payload, modalVisible: false, loading: false }
        case locationByAddressError:
            return { ...state, modalVisible: false, loading: false }   
        case getLocationByCEPSucess: 
            return { ...state, loading: false}         
        default:
            return state
    }   
}