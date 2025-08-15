// criar servidores com o nodle
const express = require('express');

// interagir com o banco de dados
const mysql = require('mysql2')

// permite que o servidor entenda o formato JSON
const bodyParser = require('body-parser');


// Cria o objeto Express para acessar metodos para configurar o servidor
const app = express();

// configura o servidor para aceitar dados no formato JSON
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost', // endereço do banco de dados
    port: 3306, // porta que ele usa
    user: 'root', // usuario
    password: '', // senha
    database: 'meu_backend' // nome EXATO do banco
})


// o metodo connect (que é da biblioteca mysql2) tenta se conectar ao banco
// se o erro nao for nulo, nao faz a conexão 
// recebe como argumento uma funcao de callback - ou seja, uma funcao que sera executada depois que o banco de dados responder
connection.connect(error => {
    if (error) {
        console.error('Erro ao connectar ao banco de dados:' + error.stack);
        return;
    }
    console.log('conectado ao banco de dados com ID' + connection.threadId);
})

// rotas

// rota para criar um novo usuario

//Cria uma rota HTTP POST para cadastra um nopvo usuario no vbanco de dados
// app é a nossa aplicação express
// .post() define que esta rota aceita apena requisiçoes HTTP do tipo post
// '/usuarios' é o caminho da url
// (req,res) =>  { ... } é a funçao de callback que sera executada quando essa chamada for executada
// req (request): objeto que contem todas as informaçoes da requissição feita pelo cliente
// res (response): objeto usado para enviar uma resposta ao cliente
app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
      if (error) return res.status(500).send('Erro ao adicionar usuário.' + error.message);
      res.status(201).send('Usuário adicionado com sucesso.');
    });
  });

// rota para pegar informaçoes de todos os usuarios

app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
      if (error) return res.status(500).send('Erro ao obter usuários.');
      res.json(results);
    });
  });

// rota par apegar informaçoes de um unico usuario

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, result) => {
        if (error) return res.status(500).send('Erro ao obter o usuario: ' + error.message);
        res.json(result);
    });
})

// rota para atualizar um usuario

app.put('/usuarios/:id', (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? where id = ? ';
    connection.query(sql, [nome, email, senha, id], (error) => {
        if (error) return res.status(500).send('Erro ao atualizar o usuario: ' + error.message);
        res.json(result);
    });
})

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    sql = ""
    connection.query(sql)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


