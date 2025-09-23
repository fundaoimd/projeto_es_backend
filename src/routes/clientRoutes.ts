// src/routes/clientRoutes.ts
import { Router } from 'express';
import pool from '../database/connection';

const router = Router();

// Rota para CRIAR um novo cliente (Create)
router.post('/clients', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newClient = await pool.query(
      'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    res.status(201).json(newClient.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    }
  }
});

// Rota para LER todos os clientes (Read)
router.get('/clients', async (req, res) => {
  try {
    const allClients = await pool.query('SELECT * FROM clients ORDER BY id ASC');
    res.json(allClients.rows);
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    }
  }
});

// Rota para LER um cliente específico (Read by ID)
router.get('/clients/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const client = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
      if (client.rows.length === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
      }
      res.json(client.rows[0]);
    } catch (err) {
      if (err instanceof Error) {
          res.status(500).json({ error: err.message });
      }
    }
  });


// Rota para ATUALIZAR um cliente (Update)
router.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  try {
    const updatedClient = await pool.query(
      'UPDATE clients SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
      [name, email, phone, id]
    );
    if (updatedClient.rows.length === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json(updatedClient.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    }
  }
});

// Rota para APAGAR um cliente (Delete)
router.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOp = await pool.query('DELETE FROM clients WHERE id = $1 RETURNING *', [id]);
    if (deleteOp.rowCount === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json({ message: 'Cliente apagado com sucesso.' });
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    }
  }
});

export default router;