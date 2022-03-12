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
  60 * 4,
  ["Daniel Radcliffe", "Emma", "Huppert"],
  2001,
  false
);

//console.log(catalogo);

function buscarFilme(Codigo) {
  for (let index = 0; index < catalogo.length; index++) {
    if (catalogo[index].codigo == Codigo) {
      return catalogo[index];
    }
  }
}
//buscarFilme(3);

function alterarStatusEmCartaz(Codigo, Callbackfn) {
  const objeto = Callbackfn(Codigo);
  objeto.emCartaz = !objeto.emCartaz;
  return objeto;
}
//console.log(alterarStatusEmCartaz(1, buscarFilme));
//alterarStatusEmCartaz(3);

function listarTodosOsFilmes(catalogo) {
  catalogo.forEach((filme) =>
    console.log(`
  Titulo: ${filme.titulo}
  Duração: ${filme.duracao}
  Atores: ${filme.atores}
  Ano de Lançamento: ${filme.anoDeLancamento}
  Em Cartaz: ${filme.emCartaz ? "sim" : "não"}
`)
  );
  return "";
}
console.log(listarTodosOsFilmes(catalogo));

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
//alterarStatusEmCartazTernario(3);
//console.log(catalogo);

function listarFilmesDeLongaDuracao() {
  const novoArray = catalogo.filter((valor) => valor.duracao >= 60 * 2);
  return novoArray;
}
//console.log(listarFilmesDeLongaDuracao());
