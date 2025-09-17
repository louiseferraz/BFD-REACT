let frutas = ["maçã", "banana"];
frutas.push("laranja");     
frutas.unshift("uva");      
console.log(frutas);         

console.log("Tamanho:", frutas.length); 
console.log("Primeira fruta:", frutas[0]); 
console.log("Última fruta:", frutas[frutas.length - 1]); 

frutas.pop();
frutas.shift(); 
console.log(frutas);

const obj1 = {
  nome : "Leandro",
  matricula : "202501"
}
const obj2 = {
  nome : "Maria",
  matricula : "202502"
}

var objetos = [];
objetos.push(obj1);
console.log(objetos);
objetos.push(obj2);
console.log(objetos);