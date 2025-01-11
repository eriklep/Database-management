import express from "express";
import {pgPool} from './pg_con.js'

const app = express();

app.listen(3001, () => {
    console.log('Server is running in port 3001')
});

app.get('/genre', async (req,res) => {
    res.send('genre')
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