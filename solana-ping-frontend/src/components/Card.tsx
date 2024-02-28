import { FC } from "react";
import { Movie } from "../models/movie";
export const Card: FC<{movie:Movie}> = ({movie}) =>{
    return(
        <div>
            <p>Title: {movie.title}</p>
            <p>Description: {movie.description}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    )
}