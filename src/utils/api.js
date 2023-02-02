import axios from "axios";
import crypto from "crypto-js";
export const baseUrl = "https://chat-app-backend-3mkk.onrender.com";


export function scrollBottom(id) {
    document.getElementById(id).scrollTop =
        document.getElementById(id).scrollHeight;
}

export async function axiosDelete(endpoint, id) {
    const { data: response } = await axios.delete(
        `${baseUrl}/${endpoint}/${id}`
    );
    return response;
}

export const decryptMessage = (key, message, iv) => {
    let _key = crypto.enc.Hex.parse(key);
    const result = crypto.AES.decrypt(message, _key, {
        iv: crypto.enc.Hex.parse(iv),
        mode: crypto.mode.CBC,
        format: crypto.format.Hex,
    }).toString(crypto.enc.Utf8);
    return result;
};