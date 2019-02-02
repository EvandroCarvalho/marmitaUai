export const getGetLocation = ({navigation}) => {
    return dispatch => {
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
        type: 'getLocation',
        payload: coords
    })
    navigation.navigate('ListRestaurants')
}

getGetlocationError = (dispach,navigation) => {
    dispach({
        type:'getLocationError'
    })
    navigation.navigate('RegisterUserLocationScreen')
}

 export const getLocationAPI = (address, navigation) => {
    console.log(navigation)
    return dispatch => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address.number}+${address.street}+${address.city}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
        const result = fetch(url)
        result.then(body => body.json())
        .then(json => {
            console.log(json.results[0])
            const response = json.results[0]
            //onsucess(response, dispatch, address)
            navigation.navigate('ListRestaurants')
        })
        .catch( error => console.log(error))
    }
} 