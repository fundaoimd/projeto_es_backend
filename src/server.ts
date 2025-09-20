// src/server.ts
import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

// Teste de conexão
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Erro na conexão com o banco de dados', err.stack);
    }
    client.release();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('API do projeto de Engenharia de Software está online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});