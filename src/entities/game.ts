import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publisher} from "./publisher";

export interface Game {
    id: number
    name: string
    slug: string
    genres: Genre[]
    publishers: Publisher[]
    background_image: string
    description_raw: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}