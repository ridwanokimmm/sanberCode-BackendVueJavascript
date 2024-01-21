// Import Module
import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken"

import Router from "./routes/routes.js";
import db from "./config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Inisiasi dan membuat server dengan express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.post('/register', (req, res) => {
  const { username, password } = req.body;
  let timenya = new Date();

  db.query('INSERT INTO users (username, password, registered) VALUES (?, ?, ?)', [username, password, timenya], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(201).send('User registered successfully');
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }

    if (result.length === 0) {
      res.status(401).send('Username tidak valid.');
      return;
    }

    // Validasi password
    const user = result[0];
    const isValidPassword = password === user.password;

    if (!isValidPassword) {
      res.status(401).send('Password Salah');
      return;
    }

    // Generate JWT token acak
    const token = jwt.sign({ id: user.id, username: user.username }, 'Token Key: ', { expiresIn: '1h' });

    res.json({ token });
  });
});


app.post('/logout', (req, res) => {
  res.setHeader('Authorization', '');
  res.status(200).send('Logout successful');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(Router);


// Inisiasi server ke 8080
app.listen(8080, () => console.log("Server running at http://localhost:8080"));
