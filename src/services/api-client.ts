import axios from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a8cdae7a3570499c89c3b11c0b937c81'
    },

})