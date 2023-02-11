import express from "express";
 import routes from "./router/routes"; 
/* import cors from "cors" */
/* import "./database";*/
const mongoose = require('mongoose');
const fs = require('fs');
mongoose.connect('mongodb+srv://felipy:StLgZb.XN5PvrU5@apicluster.5g7hsuu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

class App {
  constructor() {
    this.app = express();

    /* this.app.use(cors()) */

    this.middlewares();
     this.routes(); 
  }

  middlewares() {
    this.app.use(express.json());
  
  }

  routes() {
    this.app.use(routes);
  } 
}

/* 
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

 */




export default new App().app;
 // senha d mongo  
// mongodb+srv://felipy:StLgZb.XN5PvrU5@apicluster.5g7hsuu.mongodb.net/?retryWrites=true&w=majority