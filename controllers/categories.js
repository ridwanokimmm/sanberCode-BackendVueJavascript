// Import Fungsi dalam Category Model
import {
  getCategories,
  getBooksByCategoriesId,
  tambahCategories,
  getCategoriesById,
  updateCategoriesById,
  deleteCategoriesById,
} from "../models/categoriesModel.js";

export const filterKategori  = (req, res) => {
  getCategories((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Mengambil Data Kategori
export const tampilKategori = (req, res) => {
  getCategories((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Mengambil Data Berdasarkan ID
export const tampilKategoriById = (req, res) => {
  getCategoriesById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}; 

// Mengambil Data Buku Berdasarkan Kategori ID
export const tampilBukuByKategoriId = (req, res) => {
  getBooksByCategoriesId(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}; 

// Menambahkan Kategori
export const tambahKategori = (req, res) => {
  const data = req.body;
  tambahCategories(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Mengubah Kategori
export const ubahKategori = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCategoriesById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Menghapus Kategori
export const hapusKategori = (req, res) => {
  const id = req.params.id;
  deleteCategoriesById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
