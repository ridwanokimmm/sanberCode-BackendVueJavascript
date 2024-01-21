import mysql from "mysql2";
  
// Koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sanbercode'
});
 
export default db;