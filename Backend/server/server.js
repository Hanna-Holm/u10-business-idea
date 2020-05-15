"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import { createSchema, Type, typedModel } from 'ts-mongoose';
// Create new express app instance
var app = express();
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/localDb', { useNewUrlParser: true,
    useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', () => {
//     console.error.bind(console, 'connection error:')
// });
// db.once('open', () => {
//     console.log('Database connected!!');
// });
// Reference to a schema and define our cases
var caseSchema = new mongoose.Schema({
    caseID: Number,
    Category: String
});
// Compile our schema into a Model, a class with which we construct documents
var Case = connection.model('Case', caseSchema);
var case2 = new Case({ caseID: 4, 'Category': 'Hardware' });
case2.save(function () {
    console.log('Saved');
});
console.log(case2.caseID);
app.get('/', function (request, response) {
    Case.find(function (err, cases) {
        var allCases = cases;
        response.send(allCases);
    });
});
//let case1 = new Case({ caseID: 3, Category: 'Hardware' });
//console.log(case1.caseID);
// app.get('/', function (request, respond) {
//     respond.send('Hello world');
// })
// app.get('/', function (request, response) {
//     const cases = db.collection('cases');
//     cases.find((error: any, items: any) => {
//         if (error) return console.error(error);
//         console.log(items);
//     })
//     response.send('Hello world');
////////
//     const url = 'mongodb://localhost:27017';
//     const dbName = 'localDb';
//     const client = mongodb.connect(url).then((client) => {
//         console.log("Connected successfully to server");
//         const db = client.db(dbName);
//         db.collections().then(collections => {
//             console.log(collections.entries);
//             respond.send("Hej");
//         });
//     });
// });
app.listen(3000, function () {
    console.log('App is listening on port 3000');
});
