// Mengimport Database
import db from "../config/database.js";

// Mengambil Data Kategori
export const getCategories = (result) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Mengambil Data Kategori Dengan ID Kategori
export const getCategoriesById = (id, result) => {
  db.query(
    "SELECT * FROM categories WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Mengambil Data Buku Dengan Kategori ID
export const getBooksByCategoriesId = (id, result) => {
  db.query(
    "SELECT * FROM books WHERE category_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Menambahkan Data Kategori
export const tambahCategories = (data, result) => {
  let timenya = new Date();
  db.query(
    "INSERT INTO categories SET name = ?, created_at = ?, updated_at = ?",
    [data.name, timenya, timenya],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Mengubah Data Kategori
export const updateCategoriesById = (data, id, result) => {
  let timenya = new Date();
  db.query(
    "UPDATE categories SET name = ?, updated_at = ? WHERE id = ?",
    [data.name, timenya, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Menghampus Data Kategori
export const deleteCategoriesById = (id, result) => {
  db.query("DELETE FROM categories WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
