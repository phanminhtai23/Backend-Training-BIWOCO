import { SQLDatabase } from "encore.dev/storage/sqldb";

// Create the todo database and assign it to the "db" variable
const db = new SQLDatabase("todo", {
    migrations: "./migrations",
});

export default db;
// Then, query the database using db.query, db.exec, etc.
