import { FC } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js"

import { requestAndConfirmAirdropIfRequired } from "@solana-developers/helpers";
export const PingButton: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = async() => {
        if(!connection || !publicKey){
            return;
        }
        const programId = new web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
        const programDataAccount = new web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");
        const transaction = new web3.Transaction();
        const instruction = new web3.TransactionInstruction({
            keys:[
                {
                    pubkey: programDataAccount,
                    isSigner: false,
                    isWritable: true
                }
            ],
            programId
        });
        transaction.add(instruction);
        await requestAndConfirmAirdropIfRequired(
            connection,
            publicKey,
            1 * web3.LAMPORTS_PER_SOL,
            0.5 * web3.LAMPORTS_PER_SOL
        )   
        sendTransaction(transaction,connection).then((sig:any)=>{
            console.log(sig)
        })
    }
    const onTransferSol = async() => {
        if(!connection || !publicKey){
            return;
        }
        const receiverPubkey = new web3.PublicKey("CQGRqeTDW3oTioNU773y3tE8RQ1rQUmwK3diRf6GuEDW");
        const transaction = new web3.Transaction();
        const instruction = web3.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: receiverPubkey,
            lamports: 5000
        });
        transaction.add(instruction);
        await requestAndConfirmAirdropIfRequired(
            connection,
            publicKey,
            1 * web3.LAMPORTS_PER_SOL,
            0.5 * web3.LAMPORTS_PER_SOL
        )   
        sendTransaction(transaction, connection).then((sig:any)=>{
            console.log(sig);
        })
    }
    return(
        <div>
            <button className="btn" onClick={onClick}>Ping!</button>
            <button className="btn" onClick={onTransferSol}>Transfer sol</button>
        </div>
    )
}