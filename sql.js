var express = require('express');
var app = express();

    app.get('/', async function(req, res){
        var sql = require('mssql');
        try {
        const pool = await sql.connect('mssql://sa:homologacao@201.45.136.166:49700/CaptacaoConversaoGraduacao')
        const result = await sql.query`select * from adm.pessoa where sexo ='M'  and email = 'ti@saolucas.edu.br'`
        res.status(200).send(result); 
    } catch (err) {
        res.status(200).send(err); 
    }

    });

  app.listen(3000, function (port) {
    console.log('Server is running in port: '+ 3000);
});