import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
const isValidAddress = PublicKey.isOnCurve("BCvqjHRFAMqwfP4r39BhrwaFkjHRYAVxLtr44aJ6rTj");
if(!isValidAddress){
    throw new Error(`Not valid address!`)
}
const publicKey = new PublicKey("BCvqjHRFAMqwfP4r39BhrwaFkjHRYAVxLtr44aJ6rTj");
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
