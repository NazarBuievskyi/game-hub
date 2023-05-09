import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a8cdae7a3570499c89c3b11c0b937c81'
    }
})