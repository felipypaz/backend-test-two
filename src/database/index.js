/* const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://felipy:StLgZb.XN5PvrU5@apicluster.5g7hsuu.mongodb.net/?retryWrites=true&w=majority",
  {
    useMongoClient: true,
  }
);

mongoose.Promise = global.Promise;
module.exports = mongoose; */

const mongoose = require('mongoose');
const fs = require('fs');

// Conectando ao banco de dados
mongoose.connect('mongodb+srv://felipy:StLgZb.XN5PvrU5@apicluster.5g7hsuu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

// Criando um schema para os dados das cervejas
const beerSchema = new mongoose.Schema({
  name: String,
  abv: Number,
  ibu: Number,
  category: String,
  description: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  coordinates: Array,
});

// Criando um modelo baseado no schema
const Beer = mongoose.model('Beer', beerSchema);

// Lendo o arquivo db.json
fs.readFile('db.json', (err, data) => {
  if (err) throw err;

  // Convertendo o conteúdo do arquivo para um array de objetos
  const beers = JSON.parse(data);

  // Inserindo os dados no banco de dados
  Beer.insertMany(beers, (error, docs) => {
    if (error) throw error;
    console.log('Dados inseridos com sucesso!');

    // Fechando a conexão com o banco de dados
    db.close();
  });
});
