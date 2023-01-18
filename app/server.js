import express from "express";
import cors from "cors";
import db from "./config/database.config.js";
import Router from "./routes/pokemon.route.js";
 
const app = express();
app.use(express.json());
app.use(cors());
 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
app.use(Router);
 
app.listen(4000, () => console.log('Server running at http://localhost:5000'));