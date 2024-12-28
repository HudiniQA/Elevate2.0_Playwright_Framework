//Install CryptoJS Library(make sure to include it in your project)
//You can download it from https://cryptojs.gitbook.io/docs/
let CryptoJSUtil = require("crypto-js");

//Get the SALT from the system environment variable
const SALT = process.env.SALT || "defaultSalt";

//Encyption function:
export function encrypt(text : String)
{
    const cipherText = CryptoJSUtil.AES.encrypt(text, SALT).toString();
    return cipherText;
}

//Decryption function:
export function decrypt(cipherText : String)
{
    const bytes = CryptoJSUtil.AES.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
    return originalText;
}