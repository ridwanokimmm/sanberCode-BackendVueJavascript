import db from "../config/database.js";

export const uploadFile = (req, res) => {
  const { filename, originalname, size } = req.file;
  const filePath = `uploads/${filename}`;

  const sql = 'INSERT INTO files (filename, originalname, size, file_path) VALUES (?, ?, ?, ?)';
  db.query(sql, [filename, originalname, size, filePath], (err, result) => {
    if (err) {
      console.error('Error inserting data to MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send(filePath);
    }
  });
};

export const getFileInformation = (req, res) => {
  const sql = 'SELECT * FROM files';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching file information:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
};

export const getLatestFile = (req, res) => {
  const sql = 'SELECT * FROM files ORDER BY id DESC LIMIT 1';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching latest file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const latestFile = result[0];
      res.status(200).json(latestFile);
    }
  });
};

export const getPhoto = (req, res) => {
  const photoFilename = req.params.filename;
  res.sendFile(photoFilename, { root: '.' });
};

export const getPhotoByPath = (req, res) => {
  const photoPath = req.params.path;
  res.sendFile(photoPath, { root: '.' });
};