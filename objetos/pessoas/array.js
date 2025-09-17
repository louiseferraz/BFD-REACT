/*var dadosAluno = ['João', 12345, true];
console.log(dadosAluno);
console.log(dadosAluno[0]);

var curso = [];
curso[0] = 'ADS'
curso[1] = ' Computação'
console.log(curso);

var notas = new Array(7.5,8.9);
console.log(notas);

var objetos = ['a', 'b', 'c', 'd']
console.log(objetos);

var frutas = [];
frutas.push("maça")
frutas.push("banana");
frutas.unshift("uva");
frutas.pop();//remove do final
frutas.shift();//remove do inicio
frutas.splice(0,1);//retira elemento da posição
frutas.splice(0,0,"morango");//adicona o elemento na posição
console.log(frutas);
console.log(frutas.length);

var Aluno = [];//matricula, curso, disciplina
Aluno.push("20123456");
Aluno.push("ADS");
Aluno.push("programação");
Aluno.push("banco de dados");
Aluno.push("redes");
Aluno.push("segurança da informação");
Aluno.pop();
Aluno.push("engenharia de software");*/

console.log(Aluno);
console.log(Aluno.length);

const Aluno = require('./Aluno');
const obj1 = new Aluno();
obj1.setNome('Pedro');
obj1.setMatricula('20250001');
console.log(obj1.getNome());

const obj2 = new Aluno();
obj2.setNome('Maria');
obj2.setMatricula('20250002');
console.log(obj2.getNome());

var objetos = [];
objetos.push(obj1);
objetos.push(obj2);
console.log(objetos);
console.log(objetos[0].getNome());

