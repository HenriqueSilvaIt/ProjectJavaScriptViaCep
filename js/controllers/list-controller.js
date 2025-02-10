
/* Lista para adiocionar novo endereço  a página*/

/* função construtora */
function State() {
    this.listSection = null;
}

const state = new State();

// iniciando a sessão do HTML de id list-section
export function init() {
        state.listSection = document.querySelector("#list-section");
}

/*Função para adicionar o card do HTML abaixo na tela */
export function addCard(address) {
    const card = createCard(address);
    state.listSection.appendChild(card); /* adicionando
    esse card na seção list card */
} 


/* criando novo card no html */
function createCard(address) {
    const div = document.createElement("div");
    div.classList.add("card-list-item"); // croamdp dov com esse nome de classe

    const h3 = document.createElement("h3");
    h3.innerHTML = address.city; // cidade

    const line = document.createElement("p");
    line.classList.add("address-line");
    line.innerHTML = `${address.street}, ${address.number}`; // logradouro

    const cep = document.createElement("p");
    cep.classList.add("address-cep");
    cep.innerHTML = address.cep; // cep 

    /* colocando a cidade, logradouro e cep no div */
    div.appendChild(h3);  /*appendChild é o elemento que vai ficar dentro do div */
    div.appendChild(line);
    div.appendChild(cep);

    return div; /*retorna esse div com otodos os elementos dentro */
}

/*     <div class="card-list-item">
          <h3>São Paulo</h3>
          <p class="address-line"> Rua dos Jardins, 720 </p>
          <p class="address-cep">1231232-323</p>
        </div> */