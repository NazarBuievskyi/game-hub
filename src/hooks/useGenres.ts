// import genres from "../data/genres";
import {useQuery} from "react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import {Genre} from "../entities/genre";


const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn:  apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,

})

export default useGenres