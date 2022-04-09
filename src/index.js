import soma from './calc.js';
import Heading from './components/heading.js';

console.log("Testando o webpack 2");

soma(3, 8);
soma(5, 10);

//Loaders
const heading = new Heading();

heading.create("Este título é dinâmico");