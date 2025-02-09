// dentro da pasta service é onde tratamos as requisiçoes da API

import RequestException from "../services/exceptions/request-exception.js";

export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jsonBody = await response.json();
        return jsonBody;
    }
    catch (e) {
        throw new RequestException("Erro ao realizar requisição");
    }
}