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
        res.status(201).json({ message: 'Genre added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/movie', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movie');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/movie', async (req, res) => {
    const { name, year, genre_name } = req.body;

    try {
        await pgPool.query('INSERT INTO movie (name, year, genre_name) VALUES ($1, $2, $3)', [name, year, genre_name]);
        res.status(201).json({ message: 'Movie added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/user_', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM user_');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/user_', async (req, res) => {
    const { name, username, birth_year } = req.body;

    try {
        await pgPool.query('INSERT INTO user_ (name, username, birth_year) VALUES ($1, $2, $3)', [name, username, birth_year]);
        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/review', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM review');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/review', async (req, res) => {
    const { movie_id, user_id, stars, review_text } = req.body;

    try {
        await pgPool.query('INSERT INTO review (movie_id, user_id, stars, review_text) VALUES ($1, $2, $3, $4)', [movie_id, user_id, stars, review_text]);
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/favorite', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM favorite');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/favorite', async (req, res) => {
    const { movie_id, user_id } = req.body;

    try {
        await pgPool.query('INSERT INTO favorite (movie_id, user_id) VALUES ($1, $2)', [movie_id, user_id]);
        res.status(201).json({ message: 'Favorite added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

