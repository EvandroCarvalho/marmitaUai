import { loading, getLocation, getLocationError } from './types'

export const getGetLocation = ({navigation}) => {
    return dispatch => {
        dispatch({
            type: 'loading'
        })
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                console.log(coords)
                getGetlocationSucess(dispatch, coords, navigation)
            },
            (error) => { console.log(error), getGetlocationError(dispatch, navigation)},
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 1000
            } 
        )    
    }
}

getGetlocationSucess = (dispatch, coords, navigation) => {
    dispatch({
        type: getLocation,
        payload: coords
    })
    navigation.navigate('ListRestaurants')
}

getGetlocationError = (dispach,navigation) => {
    dispach({
        type:getLocationError
    })
    navigation.navigate('postCode')
}

 export const getLocationByAddress = (address, {navigation}) => {
     console.log(navigation)
    return dispatch => {
        dispatch({
            type: loading
        })
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address.number}+${address.street}+${address.city}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
        const result = fetch(url)
        result.then(body => body.json())
        .then(json => {
            console.log(json.results[0].address_components)
            const response = json.results[0]
            //onsucess(response, dispatch, address)
            navigation.navigate('ListRestaurants')
        })
        .catch( error => console.log(error))
    }
}

export const getLocationByCEP = (postCode, {navigation}) => {
    return dispatch => {
        dispatch({
            type: loading
        })
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${postCode}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
        const result = fetch(url)
        result.then(body => body.json())
            .then(json => {
                getLocationByCEPSucess(dispatch ,json.results[0].address_components, navigation)
                console.log(json.results[0].address_components)
            })
            .catch(error => console.log(error))
    }
}

getLocationByCEPSucess = (dispatch, result, navigation) => {
    console.log(result)
    dispatch({
        type: getLocationByCEPSucess,
        payload: result
    })
    navigation.navigate('ListRestaurants')
}