// Mengimport Database
import db from "../config/database.js";

export const filterBuku = async (filter, result) => {

    const { title, minYear, maxYear, minPage, maxPage, sortByTitle } = filter;

    let query = 'SELECT * FROM books WHERE 1=1';
    let values = [];

    if (title) {
      query += ' AND title LIKE ?';
      values.push(`%${title}%`);
    }

    if (minYear) {
      query += ' AND release_year >= ?';
      values.push(minYear);
    }

    if (maxYear) {
      query += ' AND release_year <= ?';
      values.push(maxYear);
    }

    if (minPage) {
      query += ' AND total_page >= ?';
      values.push(minPage);
    }

    if (maxPage) {
      query += ' AND total_page <= ?';
      values.push(maxPage);
    }

    if (sortByTitle) {
      query += ` ORDER BY title ${sortByTitle}`;
    }

    //.log(query);
    //console.log(values);
    db.query(query, values, (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });

};

export const FilterBukuByCategory = async (filter, id, result) => {

  const { title, minYear, maxYear, minPage, maxPage, sortByTitle } = filter;

  let query = 'SELECT * FROM books WHERE 1=1';
  let values = [];

  if (title) {
    query += ' AND title LIKE ?';
    values.push(`%${title}%`);
  }

  if (minYear) {
    query += ' AND release_year >= ?';
    values.push(minYear);
  }

  if (maxYear) {
    query += ' AND release_year <= ?';
    values.push(maxYear);
  }

  if (minPage) {
    query += ' AND total_page >= ?';
    values.push(minPage);
  }

  if (maxPage) {
    query += ' AND total_page <= ?';
    values.push(maxPage);
  }

  query += ' AND category_id = ?';
  values.push(id);

  if (sortByTitle) {
    query += ` ORDER BY title ${sortByTitle}`;
  }

  console.log(query);
  console.log(values);
  db.query(query, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });

};

// Mengambil Data Kategori Dengan ID Kategori
export const getBukuById = (id, result) => {
  db.query(
    "SELECT * FROM books WHERE id = ?",
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

const validasiThickness = (total_page) => {
  if (total_page <= 100) {
    return "tipis";
  } else if (total_page <= 200) {
    return "sedang";
  } else {
    return "tebal";
  }
};

const validasiReleaseYear = (release_year) => {
  const currentYear = new Date().getFullYear();
  return release_year >= 1980 && release_year <= currentYear;
};

// Menampilkan Data Buku
export const getBooks = (result) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Menambahkan Data Buku
export const tambahBooks = (data, result) => {
  let timenya = new Date();
  if (!validasiReleaseYear(data.release_year)) {
    const errornya = "Tanggal Rilis Buku Harus berada pada range 1980 - 2021";
    return result(errornya, null);
  }
  const thicknessnya = validasiThickness(data.total_page);
  const sql =
    "INSERT INTO books (title, description, image_url, release_year, price, total_page, thickness, category_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    data.title,
    data.description,
    data.image_url,
    data.release_year,
    data.price,
    data.total_page,
    thicknessnya,
    data.category_id,
    timenya,
    timenya,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Mengubah Data Buku
export const updateBooksById = (data, id, result) => {
  let timenya = new Date();

  if (!validasiReleaseYear(data.release_year)) {
    const errornya = "Tanggal Rilis Buku Harus berada pada range 1980 - 2021";
    return result(errornya, null);
  }
  const thicknessnya = validasiThickness(data.total_page);
  const sql =
    "UPDATE books SET title=?, description=?, image_url=?, release_year=?, price=?, total_page=?, thickness=?, category_id=?, updated_at=? WHERE id=?";
  const values = [
    data.title,
    data.description,
    data.image_url,
    data.release_year,
    data.price,
    data.total_page,
    thicknessnya,
    data.category_id,
    timenya,
    id,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Menghapus Data Buku
export const deleteBooksById = (id, result) => {
  db.query("DELETE FROM books WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
