/*classes*/

/*
class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos)
    }
}

const MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}
*/

/*HERANÇA*/

/*
class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego'
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

*/

/*Metodos estaticos*/

/*
class Matematica{
    static soma(a,b){
        return a + b;

    }
}
Matematica.soma(1,2)
*/

/*operacoes com vetores*/

/*
const arr = [1,3,4,5,7,8,9]

const newArr = arr.map(function(item){
    return item * 2;
});

console.log(newArr);

const newarray2 = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);


const sum  = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter =  arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);



const find = arr.find(function(item){
    return item === 4;
})


console.log(find);
*/

/* array functions */
//const newArray3 = arr.map(function(item){
//    return item * 2;
//});

/*
const newArray3 = arr.map(item => item * 2);
console.log(newArray3);

const teste = () => ({nome : 'Diego'});

const teste2 = (a = 2,d = 2) => a + d;

console.log(teste());
*/

/*

//DESTURUTURACAO
const usuario = {
    nome: "Diego",
    idade: 23,
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
    },
};

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);


function mostraNome({nome, idade}){
    console.log(nome, idade);
}
mostraNome(usuario)
*/
//REST / SPREAD
"use strict";
