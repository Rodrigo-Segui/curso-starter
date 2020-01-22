var btnCriar = document.querySelector('#btnCriar')
btnCriar.style.color = '#fff'
btnCriar.style.fontWeight = 'bold';
btnCriar.style.backgroundColor = '#424242';
btnCriar.style.border = 'solid #ddd';
btnCriar.style.width = '200px';
btnCriar.style.height = '40px';
btnCriar.style.marginLeft = '45%';

function gerarQuadrado() {

    let boxElement = document.createElement("div");
    boxElement.style.width = '180px';
    boxElement.style.height = '180px';
    boxElement.style.margin = '10px';
    boxElement.style.backgroundColor = '#f00';

//adiciona a classe .box na div criada
boxElement.classList.add('box');

    document.body.appendChild(boxElement);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }
 var newColor = getRandomColor(); // #E943F0
 boxElement.style.backgroundColor = newColor;

 

