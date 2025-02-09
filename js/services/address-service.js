import * as requestService from './request-service.js';
import Address from '../models/address.js';

/* Função responsável por receber o número do e retornar um objeto Json com os 
dados do cep (logradouro, cidade, numero) */
export async function findByCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);

    /* passando atributos do Json dentro do objeto address endereço */
    const address = new Address(result.cep, result.logradouro,  null, result.localidade);

    return address;
}