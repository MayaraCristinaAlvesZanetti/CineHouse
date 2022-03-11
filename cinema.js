//var cinema = "CineHouse";
//console.log(cinema)

const catalogo = require("./database/catalogo.json");

//console.log(catalogo);

function adicionarFilme(
  Codigo,
  Titulo,
  Duracao,
  Atores,
  AnodeLancamento,
  EmCartaz
) {
  let filme = {
    codigo: Codigo,
    titulo: Titulo,
    duracao: Duracao,
    atores: Atores,
    anoDeLancamento: AnodeLancamento,
    emCartaz: EmCartaz,
  };

  catalogo.push(filme);
}
adicionarFilme(
  3,
  "Harry Potter",
  150,
  ["Daniel Radcliffe", "Emma", "Huppert"],
  2001,
  false
);

//console.log(catalogo);

function buscarFilme(Codigo) {
  for (let index = 0; index < catalogo.length; index++) {
    if (catalogo[index].codigo == Codigo) {
      console.log(
        "Codigo: " +
          catalogo[index].codigo +
          ", Titulo: " +
          catalogo[index].titulo
      );
    }
  }
}
//buscarFilme(3);

function alterarStatusEmCartaz(Codigo) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo == Codigo) {
      catalogo[i].emCartaz = !catalogo[i].emCartaz;
      console.log(catalogo[i]);
    }
  }
}
//alterarStatusEmCartaz(3);

function listarTodosOsFilmes(catalogo) {
  for (let i = 0; i < catalogo.length; i++) {
    console.log(`
    Titulo: ${catalogo[i].titulo}
    Duração: ${catalogo[i].duracao}
    Atores: ${catalogo[i].atores}
    Ano de Lançamento: ${catalogo[i].anoDeLancamento}
    Em Cartaz: ${catalogo[i].emCartaz ? "sim" : "não"}
    `);
  }
}

//listarTodosOsFilmes(catalogo);

function listarFilmesEmCartaz(catalogo) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].emCartaz) {
      console.log(`
    Titulo: ${catalogo[i].titulo}
    Duração: ${catalogo[i].duracao}
    Atores: ${catalogo[i].atores}
    Ano de Lançamento: ${catalogo[i].anoDeLancamento}
    Em Cartaz: ${catalogo[i].emCartaz ? "sim" : "não"}
    `);
    }
  }
}

//listarFilmesEmCartaz(catalogo);

function alterarStatusEmCartazTernario(Codigo) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo == Codigo) {
      catalogo[i].emCartaz
        ? (catalogo[i].emCartaz = false)
        : (catalogo[i].emCartaz = true);
    }
  }
}
alterarStatusEmCartazTernario(3);
console.log(catalogo);
