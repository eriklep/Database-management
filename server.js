import express from "express";
import { pgPool } from './pg_con.js';

const app = express();
app.use(express.json());

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.get('/genre', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM genre');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/genre', async (req, res) => { 
    const { name } = req.body; 

    try {
        await pgPool.query('INSERT INTO genre (name) VALUES ($1)', [name]); 
        res.status(201).send('Genre added successfully');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/movie', async (req,res) => {
    res.send('movie')
});
app.get('/user_', async (req,res) => {
    res.send('user_')
});
app.get('/review', async (req,res) => {
    res.send('review')
});
app.get('/favourite', async (req,res) => {
    res.send('favourite')
});