// import express
import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";

// Import Controller
import {
  uploadFile,
  getFileInformation,
  getLatestFile,
  getPhoto,
  getPhotoByPath,
} from "../controllers/uploadControll.js";

import {
  tampilKategori,
  tampilKategoriById,
  tambahKategori,
  ubahKategori,
  hapusKategori,
} from "../controllers/categories.js";

import {
  TampilBooks,
  FilterBuku,
  FilterBukuByKategori,
  tampilBukuById,
  createBooks,
  ubahBooks,
  hapusBooks,
} from "../controllers/books.js";


const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return res.status(401).send("Unauthorized: Missing token");
  }

  jwt.verify(token, 'Token Key: ', (err, user) => {
    if (err) {
      return res.status(403).send("Forbidden: Invalid token");
    }

    req.user = user;
    next();
  });
};

// Akses Publik Untuk File Upload
router.use(authenticateToken);
router.use("/uploads", express.static("uploads"));

// Upload
router.post("/upload", upload.single("file"), uploadFile);
router.get("/fileInfo", getFileInformation);
router.get("/latestFile", getLatestFile);
router.get("/photo/:filename", getPhoto);
router.get("/photoByPath/:path", getPhotoByPath);

// Kategori
router.get("/categories", tampilKategori);
router.get("/categories/:id", tampilKategoriById);
router.get("/categories/:id/books", FilterBukuByKategori);
router.post("/categories", tambahKategori);
router.patch("/categories/:id", ubahKategori);
router.delete("/categories/:id", hapusKategori);

// Buku
router.get("/books", FilterBuku);
router.get("/books/:id", tampilBukuById);
router.post("/books", createBooks);
router.patch("/books/:id", ubahBooks);
router.delete("/books/:id", hapusBooks);

// File
router.get("/fileInfo", getFileInformation);
router.get("/latestFile", getLatestFile);
router.get("/photo/:filename", getPhoto);
router.get("/photoByPath/:path", getPhotoByPath); // Endpoint baru

// export default router
export default router;
