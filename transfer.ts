import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment, requestAndConfirmAirdropIfRequired } from "@solana-developers/helpers";
const suppliedToPubkey = "CQGRqeTDW3oTioNU773y3tE8RQ1rQUmwK3diRf6GuEDW";
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const toPubkey = new PublicKey(suppliedToPubkey);
const connection = new Connection("http://localhost:8899");
const balanceInLamports = await connection.getBalance(senderKeypair.publicKey);
if(balanceInLamports < 5000){
    await requestAndConfirmAirdropIfRequired(
        connection,
        senderKeypair.publicKey,
        1 * LAMPORTS_PER_SOL,
        0.5 * LAMPORTS_PER_SOL
    )
}
const transaction = new Transaction();
const LAMPORTS_TO_SEND = 5000;
const sendSolTransaction = SystemProgram.transfer({
    fromPubkey:senderKeypair.   publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND
});
transaction.add(sendSolTransaction);
const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
console.log(`Sent ${LAMPORTS_TO_SEND} lamports to ${suppliedToPubkey}. Signature:${signature}`);
const newBalanceInLamports = await connection.getBalance(toPubkey);
const newBalanceInSol = newBalanceInLamports / LAMPORTS_PER_SOL;
console.log(`Balance in sol:`,newBalanceInSol);