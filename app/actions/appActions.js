import { NetInfo } from 'react-native'
import { 
    LOADING,
    LOADING_MODAL,
    CONNECTION_STATUS,
    LOCATION_BY_ANDROID_SUCCESS,
    LOCATION_BY_ANDROID_ERROR,
    LOCATION_BY_CEP_SUCCESS,
    LOCATION_BY_CEP_ERROR,
    LOCATION_BY_ADDRESS_SUCCESS,
    LOCATION_BY_ADDRESS_ERROR
         } from './types'
import { consultByAdress, consultByLatLong } from '../services/googleAPIService'
import { consultViaCepService } from '../services/viaCepService'


export const verifyConnection = () => {
    return dispatch => {
    NetInfo.getConnectionInfo().then(connectionInfo => {
        dispatch({
            type: CONNECTION_STATUS,
            payload: connectionInfo.type
        })
    })
    }
}

export const getLocationByAndroidAPI = ({navigation}) => {
    return dispatch => {
        console.log('buscando')
        dispatch({
            type: LOADING_MODAL
        })
        navigator.geolocation.getCurrentPosition(
            async ({coords}) => {
                let {results} = await consultByLatLong(coords)
                let address = results[0].formatted_address.split('-')[0].split(',')
                address = [...address, ...results[0].formatted_address.split('-')[1].split(',')]
                console.log(address)
                let location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    street: address[0] || '',
                    neighborhood: address[2] || '',
                    city: address[3] || ''
                }
                getLocationByAndroidAPISucesss(dispatch, location, navigation)
            },
            (error) => { getLocationByAndroidAPIError(dispatch, navigation) },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 1000
            } 
        )    
    }
}

getLocationByAndroidAPISucesss = (dispatch, coords, navigation) => {
    dispatch({
        type: LOCATION_BY_ANDROID_SUCCESS,
        payload: coords
    })
    navigation.navigate('listRestaurants')
}

getLocationByAndroidAPIError = (dispach,navigation) => {
    dispach({
        type:LOCATION_BY_ANDROID_ERROR
    })
    navigation.navigate('postCode')
}

 export const getLocationByAddress = (address, navigation) => {
     console.log(address)
    return async dispatch => {
        dispatch({
            type: LOADING
        })
        try {
        let { results } = await consultByAdress(address)
        console.log(results)
            if (results.length === 0 ) {
                return getLocationByAddressError(dispatch)
            }
            let response = createAddressObject(results[0], address)
            response = { ...response, number: address.number, complement: address.complement }
            getLocationByAddressSucess(dispatch, response, navigation)
        }
        catch(error) {
            getLocationByAddressError(dispatch)
        }
    }
}

getLocationByAddressSucess = (dispatch, response, navigation) => {
    dispatch({
        type: LOCATION_BY_ADDRESS_SUCCESS,
        payload: response
    })
    navigation.navigate('listRestaurants')
}

getLocationByAddressError = (dispatch) => {
    dispatch({
        type: LOCATION_BY_ADDRESS_ERROR
    })
}

export const getLocationByCEP = (postCode, {navigation}) => {
    let responseViaCep = ''
    return async dispatch => {
        dispatch({
            type: LOADING_MODAL
        })
        try {
            responseViaCep = await consultViaCepService(postCode)
            if(responseViaCep.erro) {
                return getLocationByCEPError(dispatch)
            } else {
                let { logradouro: street, localidade: city, bairro: neighborhood, uf: state, cep: postCode } = responseViaCep
                let { results } = await consultByAdress({street, city, neighborhood})
                let response = createAddressObject(results[0], {street, city, neighborhood, state, postCode})
                getLocationByCEPSucess(dispatch, response, navigation)
            }
        } catch(error) {
            getLocationByCEPError(dispatch)        
        }
    }
}


createAddressObject = (response, address) => {
    let { location } = response.geometry
    address = { 
        latitude: location.lat,
        longitude: location.lng,
        street: address.street,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        postCode: address.postCode
    }
    return address
}

getLocationByCEPSucess = (dispatch, result, navigation) => {
    dispatch({
        type: LOCATION_BY_CEP_SUCCESS,
        payload: result
    })
    navigation.navigate('listRestaurants')
}

getLocationByCEPError = (dispatch) => {
    dispatch({
        type: LOCATION_BY_CEP_ERROR
    })
}