function createBox(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);


    var boxElement = document.createElement('div')
    boxElement.setAttribute('class','box')
    boxElement.setAttribute('style', 'background-color:#'+randomColor +';');
    boxElement.setAttribute('id', "a"+randomColor);
    boxElement.setAttribute("onclick", 'mudarCor(this)');

    var criarElemento = document.querySelector('#app');
    criarElemento.appendChild(boxElement);

function mudarCor(elemento){
        var boxId = elemento.id;
        document.write(boxId)
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
        var boxSelector = document.querySelector("#"+boxId);
        boxSelector.setAttribute('style', 'background-color:#'+randomColor +';');
        
        console.log(boxId);
    }    
    


}