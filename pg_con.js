import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {pool} = pg;

const pgPool = new pg.Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PW,
    database: process.env.PG_DB,
    host: process.env.POG_HOST,
    port: process.env.PG_PORT
});

export {pgPool}; 