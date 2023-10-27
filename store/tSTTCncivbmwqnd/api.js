import axios from "axios"
import {
  TST_TC473_NCIVBMWQND_PASSWORD,
  TST_TC473_NCIVBMWQND_USERNAME
} from "react-native-dotenv"
const tSTTCncivbmwqnd = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_NCIVBMWQND_PASSWORD,
    password: TST_TC473_NCIVBMWQND_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473ncivbmwqnd_get_getUserDetails_read(payload) {
  return tSTTCncivbmwqnd.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473ncivbmwqnd_get_getUserDetails_read }
