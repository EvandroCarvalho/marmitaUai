
export const consultByAdress = async (address) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address.street}+${address.city}&key=AIzaSyBBnjp4mPMBFKOr65qoagqyO4w7ByInSl8`
    const response = await fetch(url)
    return response.json()
}