// Conteúdo para o ficheiro server.ts
import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoutes'; // Importa as rotas

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Usar as rotas
app.use('/api', clientRoutes); // Todas as rotas de clientes começarão com /api

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});