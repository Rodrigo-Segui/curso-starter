function criaCaixa(){
    var boxElement = document.createElement('div')
    boxElement.setAttribute('class', 'box')
    boxElement.setAttribute('style', 'background-color:#f00')
    var criarElement = document.querySelector('#app')
    criarElement.appendChild(boxElement);


}

//var btnElement = document.querySelector('button.botao')
       //     btnElement.onclick = function(){
         //      var boxElement = document.querySelector('.box')
          //     boxElement.style.width = 100;
          //     boxElement.style.height = 100;
             //