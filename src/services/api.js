import axios from "axios"
import env from "react-dotenv"

const api = axios.create({
  baseURL: "https://hotels-com-free.p.rapidapi.com",
  headers: {"x-rapidapi-key": env.X_RAPIDAPI_KEY,
	                "x-rapidapi-host": env.X_RAPIDAPI_HOT,
	                "useQueryString": true},
  params: {
    "lat": "37.788719679657554",
    "lon": "-122.40057774847898",
    "checkIn": "2021-01-27",
    "checkOut": "2021-01-28",
    "rooms": "1",
    "locale": "en_US",
    "currency": "USD",
    "pageNumber": "1"
  }
})

export default api