import CryptoJS from "crypto-js";
import { app_encr_decript_sec_key } from "../MasterData/config";

export const decrypt = (encrypted) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(
      encrypted,
      app_encr_decript_sec_key
    ).toString(CryptoJS.enc.Utf8);
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};

export let encrypt = (text) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      text,
      app_encr_decript_sec_key
    ).toString();
    return encrypted;
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};
