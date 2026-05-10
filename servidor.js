let servidor = {
  nome: "Servidor Dell PowerEdge",
  detalhes: {
    ram: "32GB",
    armazenamento: "1TB SSD"
  },
  valor: 15000
};


let servidorPromocao = {
  ...servidor,
  valor: 12000
};

// Função para listar propriedades usando for...in
function listarPropriedades(objeto) {
  for (let chave in objeto) {
    console.log(chave + ":", objeto[chave]);
  }
}


listarPropriedades(servidorPromocao);
