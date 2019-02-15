export const getListOfRestaurants = async (userLocation) => {
    let url = 'https://marmitauai.herokuapp.com/restaurants'
    let response = await fetch(url)
    return response.json()
}