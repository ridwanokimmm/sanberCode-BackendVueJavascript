// Import Fungsi dalam Books Model
import {
  getBooks,
  tambahBooks,
  getBukuById,
  filterBuku,
  FilterBukuByCategory,
  updateBooksById,
  deleteBooksById,
} from "../models/booksModel.js"; 

export const FilterBuku = (req, res) => {
  const filter = req.query;

  filterBuku(filter, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const FilterBukuByKategori = (req, res) => {
  const filter = req.query;
  const id = req.params.id;
  FilterBukuByCategory(filter, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Menampilkan Data Buku
export const TampilBooks = (req, res) => {
  getBooks((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Mengambil Data Berdasarkan ID
export const tampilBukuById = (req, res) => {
  getBukuById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}; 

// Menambahkan Data Buku
export const createBooks = (req, res) => {
  const data = req.body;
  tambahBooks(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Mengubah Data Buku
export const ubahBooks = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBooksById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Menghapus Data Buku
export const hapusBooks = (req, res) => {
  const id = req.params.id;
  deleteBooksById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
