import { Keypair } from "@solana/web3.js"
const keypair = Keypair.generate();
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, Keypair.fromSecretKey(keypair.secretKey));
console.log(`✅ Finished!`);

// The public key is:  BCvqjHRFAMqwfP4r39BhrwaFkjHRYAVxLtr44aJ6rTj
// The secret key is:  Keypair {
//   _keypair: {
//     publicKey: Uint8Array(32) [
//         2, 157,  75, 161, 216,  32, 198,  64,
//       193, 144, 254, 209, 185, 227, 185, 184,
//       164, 156,  78,  93, 101, 240,   4,  54,
//        19, 249,  97,  61,  57, 189,  73, 170
//     ],
//     secretKey: Uint8Array(64) [
//        91,  55, 249,  54, 116, 153, 111, 138, 219, 101, 226,
//         4,   1,  87, 186,  66, 189, 253, 164, 249, 190, 151,
//        22, 190, 209,  53,  70,  52,  19,  60, 143, 150,   2,
//       157,  75, 161, 216,  32, 198,  64, 193, 144, 254, 209,
//       185, 227, 185, 184, 164, 156,  78,  93, 101, 240,   4,
//        54,  19, 249,  97,  61,  57, 189,  73, 170
//     ]
//   }
// }
// ✅ Finished!