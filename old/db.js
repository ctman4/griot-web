import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'my_postgres',
    database: 'griot',
    password: 'mysecretpassword',
    port: 5432,
});

export async function createUser(username, email, password, familyId) {
    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO users (username, email, password_hash, family_id) VALUES ($1, $2, $3, $4)', [username, email, password, familyId]);
        client.release();
        return result.rowCount; // Return the number of rows affected
    } catch (err) {
        console.error('Error executing query', err);
        throw err; // Throw error to handle it in the caller function
    }
}

