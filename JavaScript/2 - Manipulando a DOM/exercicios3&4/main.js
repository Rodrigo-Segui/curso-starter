var nomes = ["Diego", "Gabriel", "Lucas"];

//pegando elemento UL
var elementoLista = document.querySelector("ul");

//peganddo o input text element
var inputNewName = document.getElementById("nome");

//percorrendo nome da lista de nomes
for (name of names) {
  //chamando função que insere o nome
  adicionaItem(name);
}

//Adicionando item ao elemento li filho do elemento ul
function adicionaItem(name) {
  console.log("TCL: adicionaItem -> name", name);
  //pegando elemento li filho de ul
  var elementoFilho = document.createElement("li");

  //criando o texto para inserir no li
  var textoDoFilho = document.createTextNode(name);

  //inserindo texto ao elemento li
  elementoFilho.appendChild(textoDoFilho);

  //inserindo o li ao elemento ul
  elementoLista.appendChild(elementoFilho);
}
function adicionar() {
  adicionaItem(inputNewName.value);

  inputNewName.value = "";
}