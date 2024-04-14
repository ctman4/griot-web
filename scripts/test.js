import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'griot',
    password: 'mysecretpassword',
    port: 5432,
});

pool.connect()
.then(() => console.log("Connected Successfully!"))
//.then(() => pool.query('INSERT INTO users (username, email, password_hash, family_id) VALUES ($1, $2, $3, $4)',
// ["cccc", "chchchc@mail.som", "password", null]))
.then(() => pool.query('select * from users limit 10'))
.then(result => console.table(result.rows))
.catch(e => console.log(e))
.finally(() => pool.end)