// import genres from "../data/genres";
import {useQuery} from "react-query";
import apiClient from "../services/api-client";
import {FetchResponse} from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number
    name: string
    image_background: string
}

// const fetchGenres = () => {
//     axios
//         .get<Genre[]>('https://api.rawg.io/api/genres')
//         .then(res => res.data)
//
//     return useQuery<Genre[], Error>({
//         queryKey: ['genres'],
//         queryFn: fetchGenres
//     })
//
// }

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: {count: genres.length, results: genres}

})

export default useGenres