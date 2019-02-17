export const consultViaCepService = async (postCode) => {
    let url = `https://viacep.com.br/ws/${postCode}/json/`
    let result = await fetch(url)
    console.log(result)
    return result.json()
}