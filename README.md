# Seleksi Beasiswa Bootcamp dan Kerja di Sanbercode
> Nama: Ridwan Ramadhan <br>
Technical Skill Assessment (Backend) dengan penggunaan express Node.JS, JWT, mysql, JWT, dan lainya. 

## Menjalankan Backend

##### Membuat Database "sanbercode" ->
`Upload SQL pada main code dengan nama 'sanbercode.sql'`

##### Module sudah terinstall & Jalankankan menggunakan
`node index.js`

## List Path Backend
> Port: 8080

GET localhost:8080/categories (untuk menampilkan seluruh category)
POST localhost:8080/categories (untuk membuat category baru)
PATCH localhost:8080/categories/:id (untuk update category yang sudah ada berdasarkan id category)
DELETE localhost:8080/categories/:id (untuk menghapus data category)
GET localhost:8080/categories/:id/books (untuk menampilkan seluruh data books berdasarkan id category)

GET localhost:8080/books (untuk menampilkan seluruh book)
POST localhost:8080/books (untuk membuat book baru)
PATCH localhost:8080/books/:id (untuk update book yang sudah ada berdasarkan id book)
DELETE localhost:8080/books/:id (untuk menghapus data book)

##### Path Filter
localhost:8080/books?sortByTitle=asc&minYear=2000&maxPage=150
localhost:8080/books?title=algoritma&minYear=2000&maxYear=2010
localhost:8080/categories/1/books?sortByTitle=desc&minYear=2000&maxPage=150

