// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/
// Definindo uma exceção personalizada 

export default function RequestException(message) {
    const error = new Error(message); /* esse objeto Error é um objeto padrão do java script
    aqui estamos instanciando ele passando uma message personalizada */
    return error;
  }
  
  RequestException.prototype = Object.create(Error.prototype); /* aqui estamos dizendo
  que nossa exceção personalizada  RequestException vai ter o mesmo
  prototype do objeto Error ( objeto padrão do java script) */
  