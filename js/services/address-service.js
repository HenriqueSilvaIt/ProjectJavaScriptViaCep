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

export function getErrors(address) {
    const errors = {};

    if (!address.cep || address.cep == "") { /* se for nulo  ! n ta defindo ou tiver vazio */
        errors.cep = "Campo requerido";
    }

    if (!address.number || address.number == "") { /* se for nulo  ! n ta defindo ou tiver vazio */
        errors.number = "Campo requerido";
    }

   return errors;
}
