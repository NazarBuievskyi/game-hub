import {useQuery} from "react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/screenshot";


const useScreenShots = (gameId: number) => {

    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)

    return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll
})}

export default useScreenShots