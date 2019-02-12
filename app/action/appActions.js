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
    return dispatch => {
        dispatch({
            type: loading
        })
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address.street}+${address.city}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
        const result = fetch(url)
        result.then(body => body.json())
        .then(json => {
            if(json.results.length === 0 ) {
                throw 'Endereço invalido'
            }
            let response = createAddressObject(json.results[0])
            response = { ...response, number: address.number, complement: address.complement }
           getLocationByAddressSucess(dispatch, response, navigation)
        })
        .catch( error => getLocationByAddressError(dispatch))
    }
}

getLocationByAddressSucess = (dispatch, response, navigation) => {
    console.log(response)
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
    return dispatch => {
        dispatch({
            type: loadingModal
        })

        let url = `https://viacep.com.br/ws/${postCode}/json/`
        const result = fetch(url)
        result.then(data => {
            let ResponseStatus = JSON.parse(data._bodyText)
            if(!ResponseStatus.erro) {
                responseViaCep = JSON.parse(data._bodyText)
                let urlGoogle = `https://maps.googleapis.com/maps/api/geocode/json?address=${responseViaCep.logradouro}+${responseViaCep.localidade}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
                let result = fetch(urlGoogle)
                result.then(data => data.json())
                    .then(json => {
                        let response = createAddressObject(json.results[0])
                        response = {...response, street: responseViaCep.logradouro, postCode}
                        getLocationByCEPSucess(dispatch, response, navigation)
                    })
            } else {
                throw 'cep incorreto'
            }
            })
        .catch(error => getLocationByCEPError(dispatch))
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