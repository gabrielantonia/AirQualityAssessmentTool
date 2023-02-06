import axios from "axios";

export async function getCityData(city) {
    const url = `https://api.openaq.org/v2/latest?city=${city.toUpperCase().trim()}&country=US&limit=1`;
    let response = '';
    try {
        response = await axios.get(url);
        if (response.data) {
            console.log('response  ', response)
            return response.data;
        }
    } catch (error) {
        return (error);
    }
}