// Importando as funcionalidades e constante do arquivo biblioteca.js
import { somar, multiplicar, pi } from './biblioteca.js';

resp.innerHTML = `A soma de 3 e 4 é: ${somar(3, 4)} <br/>
                  A multiplicação de 3 e 4 é: ${multiplicar(3, 4)} <br/>
                  O valor de pi é: ${pi}.`;