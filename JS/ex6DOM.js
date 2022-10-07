//Como atualizar um elemento no JS

//Criamos um novo Elemento
const novoTitulo = document.createElement('h2');
//Colocamos as características que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento H5 atual (que está orinalmente no HTML)
const tituloAtual = document.getElementById('task-title');

//Capturamos o elemento mãe/pai do elemento que queremos atualizar
let divMaeDoTitulo = document.getElementsByClassName('card-action');

divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual)



