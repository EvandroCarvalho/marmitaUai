import { NetInfo } from 'react-native'
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
         } from './types'
import { consultByAdress } from '../service/googleAPIService'
import { consultViaCepService } from '../service/viaCepService'


export const verifyConnection = () => {
    return dispatch => {
    NetInfo.getConnectionInfo().then(connectionInfo => {
        dispatch({
            type: connectionStatus,
            payload: connectionInfo.type
        })
    })
    }
}

export const getLocationByAndroidAPI = ({navigation}) => {
    return dispatch => {
        dispatch({
            type: loadingModal
        })
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                let { latitude, longitude } = coords
                getLocationByAndroidAPISucesss(dispatch, {latitude, longitude}, navigation)
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
        type: locationByAndroidSucess,
        payload: coords
    })
    navigation.navigate('ListRestaurants')
}

getLocationByAndroidAPIError = (dispach,navigation) => {
    dispach({
        type:locationByAndroidError
    })
    navigation.navigate('postCode')
}

 export const getLocationByAddress = (address, navigation) => {
    return async dispatch => {
        dispatch({
            type: loading
        })
        try {
        let { results } = await consultByAdress(address)
            if (results.length === 0 ) {
                getLocationByAddressError(dispatch)
            }
            let response = createAddressObject(results[0])
            response = { ...response, number: address.number, complement: address.complement }
            getLocationByAddressSucess(dispatch, response, navigation)
        }
        catch(error) {
            console.log(error)
        }
    }
}

getLocationByAddressSucess = (dispatch, response, navigation) => {
    dispatch({
        type: locationByAddressSucess,
        payload: response
    })
    navigation.navigate('ListRestaurants')
}

getLocationByAddressError = (dispatch) => {
    dispatch({
        type: locationByAddressError
    })
}

export const getLocationByCEP = (postCode, {navigation}) => {
    let responseViaCep = ''
    return async dispatch => {
        dispatch({
            type: loadingModal
        })
        try {
            responseViaCep = await consultViaCepService(postCode)
            if(responseViaCep.erro) {
                return getLocationByCEPError(dispatch)
            } else {
                let { logradouro: street, localidade: city } = responseViaCep
                let { results } = await consultByAdress({street, city})
                let response = createAddressObject(results[0])
            response = {...response, street: responseViaCep.logradouro, postCode}
            getLocationByCEPSucess(dispatch, response, navigation)
            }
        } catch(error) {
            console.log(error)
        }
    }
}


createAddressObject = (response) => {
    let address = {}
    let { location } = response.geometry
    let { address_components } = response
    address = { 
        latitude: location.lat,
        longitude: location.lng,
        street: address_components[0].long_name,
        neighborhood: address_components[1].long_name,
        city: address_components[2].long_name,
        state: address_components[3].long_name,
        country: address_components[4].long_name,
        postCode: address_components[5].long_name
     }
     return address

}

getLocationByCEPSucess = (dispatch, result, navigation) => {
    dispatch({
        type: locationByCEPSucess,
        payload: result
    })
    navigation.navigate('ListRestaurants')
}

getLocationByCEPError = (dispatch) => {
    dispatch({
        type: locationByCEPError
    })
}