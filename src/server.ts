// src/server.ts
import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Verifica se as variáveis de ambiente necessárias estão definidas
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

if (!DB_USER || !DB_HOST || !DB_NAME || !DB_PASSWORD) {
    console.error('Erro: Variáveis de ambiente do banco de dados não estão configuradas corretamente no arquivo .env.');
    process.exit(1); // Encerra o processo com um código de erro
}

const app = express();
app.use(express.json());

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
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

// NOVA ROTA: Rota para buscar todos os usuários
// app.get('/users', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
//         res.json(result.rows);
//     } catch (err) {
//         console.error('Erro ao buscar usuários:', err);
//         res.status(500).send('Erro no servidor');
//     }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});