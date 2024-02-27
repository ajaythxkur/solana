import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
const publicKey = new PublicKey("CQGRqeTDW3oTioNU773y3tE8RQ1rQUmwK3diRf6GuEDW");
const connection = new Connection("http://localhost:8899");
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
console.log(`Balance is:`, balanceInSol);