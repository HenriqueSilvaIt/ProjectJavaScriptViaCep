 function State() {
    this.container = null;
    this.btnClose = null;

}
 
export function init() {
    
    State.container = document.querySelector("#modal-contact"); /* colocando nome  do id do htmml */
    State.btnClose = document.querySelector("#modal-contact-close");

    // inscrevendo função de fechar o modal com o botão close

    State.btnClose.addEventListener('click', handleBtnCloseClick);
    State.container.addEventListener('click', handleContainerClick);
}





/* função responsável por apresentar  o modal na tela, ou seja colocar
a classe active no id modal-contact do html */
export function showModal() {
    State.container.classList.add("active"); // acrescentando classe active para o modal aparecer na tela
}

export function closeModal() {
    State.container.classList.remove("active"); // removendo classe active para o modal desaparecer na tela
}

function handleBtnCloseClick(event) {
    event.preventDefault(); // botão quase sempre é colocado isso, para ele n fazer nenhuma ação dele própria
    // para ele fazer a função que colocarmos abaixo
    closeModal();

}


/* função para fechar a caixinha do modal, quando clicar fora da caixinha na parte de fora na página */

function handleContainerClick(event) {
    event.preventDefault();
    /*o this no console.log(this), vai ser sempre a classe ou id que você colocou o Listener container */
    /* event.target presenta o local onde vocÊ clica, se
    você clciar fora caixinha, o event target vai ser todo o container
    se você clicar na caixinha o event target vai ser só o div da caixinha */
    if (event.target === this) {
        closeModal();
    }

    }