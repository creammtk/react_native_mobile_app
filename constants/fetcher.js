import axios from "axios";

const fetcher = axios.create()
fetcher.defaults.baseURL = 'http://192.168.1.35:8000'

export default fetcher 