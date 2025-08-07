const dados = "nome:João Silva;email:joao.silva@ifce.edu.br;curso:Técnico em Informática;matricula:202312345";

const partes = dados.split(";");

let nome = "";
let email = "";
let curso = "";
let matricula = "";

for (let i = 0; i < partes.length; i++) {
  let item = partes[i];
  let separa = item.split(":");

  if (separa[0] === "nome") {
    nome = separa[1];
  } else if (separa[0] === "email") {
    email = separa[1];
  } else if (separa[0] === "curso") {
    curso = separa[1];
  } else if (separa[0] === "matricula") {
    matricula = separa[1];
  }
}

let posicaoEmail = dados.indexOf(email);
console.log("Posição do e-mail:", posicaoEmail);

let emailCorreto = email.includes("@ifce.edu.br");
console.log("O e-mail é do IFCE?", emailCorreto);

let comecaCom2023 = matricula.startsWith("2023");
console.log("A matrícula começa com 2023?", comecaCom2023);

curso = "Informática para Internet";

let dadosComIgual = dados.replace(/:/g, "=");
console.log("Dados com '=':", dadosComIgual);

console.log("Olá, " + nome + "! Seu e-mail institucional é " + email + " e você está matriculado no curso de " + curso + ".");
