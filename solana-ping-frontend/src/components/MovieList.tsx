import { FC, useEffect, useState } from "react";
import * as web3 from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Movie } from "../models/movie";
import { Card } from "./Card";
const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const MovieList: FC = () => {
    const { connection } = useConnection();
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(()=>{
        connection.getProgramAccounts(new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)).then(async(accounts)=>{
            const movies: Movie[] = accounts.map(({account})=>{
                return Movie.deserialize(account.data)
            })
            setMovies(movies)
        })
    },[])
    
    return(
        <div>
            {
                movies.map((movie,i)=> <Card key={i} movie={movie}/>)
            }
        </div>
    )
}