import { Password } from "@/data/Password";
import { SECRET_PASSPHRASE } from "@/data/appConfig";
// @ts-ignore
import { AES, enc } from "crypto-js";
import { v4 as uuidv4 } from "uuid";

export const addPassword = ({ title, value }: Password) => {
  const passwords = JSON.parse(localStorage.getItem("passwords") ?? "[]");
  const encryptedPassword = AES.encrypt(value, SECRET_PASSPHRASE).toString();
  passwords.push({ title, value: encryptedPassword, id: uuidv4() } as Password);
  localStorage.setItem("passwords", JSON.stringify(passwords));
};

export const fetchPasswords = () => {
  const passwords = JSON.parse(localStorage.getItem("passwords") ?? "[]");
  return passwords;
};

export const decryptPassword = ({ encrypted }: { encrypted: string }) => {
  const bytes = AES.decrypt(encrypted, SECRET_PASSPHRASE);
  const decrypted = bytes.toString(enc.Utf8);
  return decrypted;
};
