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


### Pemberian ID untuk Header ###

Pada waktu dikonversi menjadi HTML, tiap header akan diberikan id supaya bisa dijadikan tautan. 
Berikut aturan pemberian id:

  - Semua formatting, link, dsb, dihilangkan.
  - Semua tanda baca dihapus kecuali underscore, hyphen, dan titik.
  - Mengganti spasi dan ganti baris dengan hyphen.
  - Semua huruf dijadikan huruf kecil.
  - Semua karakter aneh dihapus sampai huruf pertama (id tidak boleh diawali angka atau tanda baca).
  - Bila habis semua, gunakan id `section`.
  - 
##### Path Filter
localhost:8080/books?sortByTitle=asc&minYear=2000&maxPage=150
localhost:8080/books?title=algoritma&minYear=2000&maxYear=2010
localhost:8080/categories/1/books?sortByTitle=desc&minYear=2000&maxPage=150

