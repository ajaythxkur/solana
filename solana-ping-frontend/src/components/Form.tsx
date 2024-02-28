import { FC, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Movie } from "../models/movie";
import { PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const From: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet()
    const handleSubmit = (event:any) =>{
        event.preventDefault();
        const movie = new Movie(title, rating, description);
        handleTransactionSubmit(movie)
    }
    const handleTransactionSubmit = async(movie: Movie) => {
        if(!publicKey){
            alert("Please connect your wallet!")
            return
        }
        const buffer = movie.serialize();
        const transaction = new Transaction();
        const [pda] = await PublicKey.findProgramAddressSync(
            [publicKey.toBuffer(), Buffer.from(movie.title)],
            new PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        );
        const instruction = new TransactionInstruction({
            keys: [
                {
                    pubkey: publicKey,
                    isSigner: true,
                    isWritable: false
                },
                {
                    pubkey: pda,
                    isSigner:false,
                    isWritable: true
                },
                {
                    pubkey:SystemProgram.programId,
                    isSigner:false,
                    isWritable:false
                }
            ],
            data: buffer,
            programId: new PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        });
        transaction.add(instruction)
        try{
            const txid = await sendTransaction(transaction, connection);
            console.log(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`);
            
        }catch(e){
            alert(JSON.stringify(e))
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                <input type="number" value={rating} onChange={(e)=>setRating(parseFloat(e.target.value))} placeholder="Rating"/>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
                <input type="submit" />
            </form>
        </div>
    )
}