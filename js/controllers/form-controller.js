/*  pasta controller ( tem todos os módulos/classes onde usuario faz açao e aqui ele trata) */

import Address from '../models/address.js';

/* função construtora que guarda referencias para os input botão e etc */

function State() {

    /* injeção de dependencia do objeto address, dentro do estado do controle */
    this.adress = new Address();

    /*botão*/
    this.btnSave = null;
    this.btnClear = null;

    /* input */
    this.inputCep = null;
    this.inputStreet = null;
    this.inuptNumber = null;
    this.inputCity = null;

    /*mensagem de erros */
    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();

export function init() {
    
    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');   
     
    
/* essa função já imprimi direto na  tela do navegador essa mensagem de erro 
    setFormError("cep", "Esta é a mensagem do CEP");
    setFormError("number", "Mensagem de erro do number");
    */

    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.btnClear.addEventListener('click', handleBtnClearClick);
}

function handleInputNumberChange(event) {
    if (event.target.value == "") {
        setFormError("number", "Campo requerido");/*primeiro parametro é qual é o campo, e o 
        segundo a mensagem de erro */
    }
    else {
        setFormError("number", "");
    }
}


/* Botão de limpar */
function handleBtnClearClick(event) {
    event.preventDefault();
    clearForm(); /*função que vai limpar o formulário*/
}

/* função que limpa o formulário */
function clearForm() {
    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value = "";
    state.inputStreet.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus(); /* focus é uma função padrão que joga
    o cursor para o primeiro item da lista novamente para o usuário digitar */
}


function setFormError(key, value) { /* key é o nome do data erro que  criamos no html
    e o segundo argumento é o valor que vamos querer colocar de mensagem de erro */
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;

}