-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2024 at 11:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sanbercode`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image_url` text NOT NULL,
  `release_year` int(10) NOT NULL,
  `price` varchar(50) NOT NULL,
  `total_page` int(10) NOT NULL,
  `thickness` varchar(50) NOT NULL,
  `created_at` time NOT NULL,
  `updated_at` time NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `image_url`, `release_year`, `price`, `total_page`, `thickness`, `created_at`, `updated_at`, `category_id`) VALUES
(1, 'MARVEL`S THE AVENGERS STORYBOOK COLLECTION', 'read seven awesome Super Hero stories in this action-packed collection. Join Iron man, Captain America, Thor, Hulk, Hawkeye, Black Widow, and Nick Fury as they fight the universe\'s biggest baddies and save mankind!', 'http://localhost:8080/uploads/1705828503870-1.jpg', 2005, '75000', 120, 'sedang', '16:15:03', '16:15:03', 1),
(2, 'THE AMAZING SPIDER-MAN COMING HOME', 'Throughout his life, Peter Parker has often felt alone. When he first discovered his spider like abilities after beingbitten by a radioactive spider, he kept them secret.\n', 'http://localhost:8080/uploads/1705828552523-2.jpg', 2015, '85000', 210, 'tebal', '16:15:52', '16:15:52', 1),
(3, 'MARVEL AVENGERS ASSEMBLE HAPPY TIN', 'Assemble with Iron Man, Thor, Captain America, and the rest of the Avengers for hours of colouring, sticker, and activity fun in this awesome collectable tin!', 'http://localhost:8080/uploads/1705828637610-3.jpg', 2017, '105000', 300, 'tebal', '16:17:17', '16:17:17', 1),
(4, 'MARVEL IRON MAN: AN ORIGIN STORY', 'A ORIGIN STORY of IRON MAN', 'http://localhost:8080/uploads/1705828712942-4.jpg', 2007, '50000', 90, 'tipis', '16:18:32', '16:18:32', 1),
(5, 'Amazing Spider-Man Annual', 'Amazing Spider-Man Annual #21 Cover Print. Signed by Jim Shooter. Print on heavy stock. 11\" x 17\", full color.', 'http://localhost:8080/uploads/1705828899269-5.jpg', 2005, '76000', 101, 'sedang', '16:21:39', '16:21:39', 1),
(6, 'BATMAN: NIGHTWALKER', 'Komplotan Nightwalker meneror Kota Gotham, dan Bruce Wayne target mereka berikutnya. Di balik topeng Batman, Bruce Wayne adalah pemuda gegabah yang bersedia melanggar aturan demi seorang gadis yang mungkin musuh terburuknya.', 'http://localhost:8080/uploads/1705829292198-batman-nightwalker.jpg', 2009, '104000', 105, 'sedang', '16:28:12', '16:28:12', 2),
(7, 'WONDER WOMAN: WARBRINGER', 'Putri Keabadian Diana adalah putri Ratu Amazon, dan mendambakan kesempatan untuk membuktikan diri. Namun, saat kesempatan itu datang', 'http://localhost:8080/uploads/1705829348595-wonder-woman-warbringer.jpg', 2009, '42000', 88, 'tipis', '16:29:09', '16:29:09', 2),
(8, 'ROBIN HOOD', '\"Sapakah diantara kalian yang bernama Robin Hood? Aku akan senang sekali bertemu dengan dia yang dapat bangkit dari kematian dengan sangat berani\" ', 'http://localhost:8080/uploads/1705829450413-robin-hood.jpg', 2006, '66000', 150, 'sedang', '16:29:09', '16:30:50', 2),
(9, 'ONE PUNCH MAN 12', 'Meski monster muncul terus menerus, pertandingan bela diri Super Fight tetap berlanjut. Di dalam dan di luar arena, orang-orang kuat mulai muncul, dan situasi pun berbalik.', 'http://localhost:8080/uploads/1705831173158-one-punch-man-12.jpg', 2004, '23000', 150, 'sedang', '16:59:33', '16:59:33', 3),
(10, 'ONE PUNCH MAN 18', 'Garou yang pergi dari markas Asosiasi Monster memulihkan tubuhnya terlebih dahulu. Bukannya menemukan Hero, ternyata dia malah bertemu lagi dengan Tareo, bocah yang pernah dia tolong.', 'http://localhost:8080/uploads/1705831207399-one-punch-man-18.jpg', 2017, '24000', 186, 'sedang', '17:00:07', '17:00:07', 3),
(11, 'ONE PUNCH MAN 15', 'Kerusuhan serangan dari Asosiasi Monster akhirnya mereda untuk sementara. Apakah tujuan mereka? Apa pun itu, Asosiasi Hero sudah merasa dipermalukan dan tak punya pilihan selain menunjukkan serangan balasan.', 'http://localhost:8080/uploads/1705831233738-one-punch-man-15.jpg', 2018, '32000', 186, 'sedang', '17:00:33', '17:00:33', 3),
(12, 'ONE PUNCH MAN 11', 'Monster muncul berturut-turut di berbagai kota, dan para Hero tak sanggup menghadapi mereka. Para monster yang selama ini segan pun menyadari betapa manusia sebenarnya lemah.', 'http://localhost:8080/uploads/1705831258492-one-punch-man-11.jpg', 2012, '34000', 199, 'sedang', '17:00:58', '17:00:58', 3),
(13, 'DEMON KING 53', 'Murin telah menunggu Demon King! Pertemuan antara keduanya bagaikan takdir yang tak bisa dihindari. Balas dendam pun dimulai. Namun rupanya Murin juga merencanakan sesuatu yang lain!', 'http://localhost:8080/uploads/1705831289889-demon-king-53.jpg', 1981, '32600', 109, 'sedang', '17:01:29', '17:01:29', 3),
(14, 'SHERLOCK, LUPIN DAN AKU 3', 'Dalam iklan mengenai Pemasalahan Catur oleh Biarawan Hitam, Sherlock Holmes menemukan kejanggalan pada kode-kode notasi catur yang aneh.', 'http://localhost:8080/uploads/1705831346222-sherlock-lupin-dan-aku-3-cover-baru-misteri-mawar-merah.jpg', 2016, '42000', 320, 'tebal', '17:02:26', '17:02:26', 5),
(15, 'SHERLOCK, LUPIN DAN AKU 2', 'Ayah Lupin, Theopraster Lupin, ditahan dengan tuduhan pembunuhan atas Alfredo Santi, asisten komposer kenamaan Giuseppe Barzini dan terancam dihukum gantung!', 'http://localhost:8080/uploads/1705831367576-sherlock-lupin-dan-aku-2-babak-terakhir-drama-opera.jpg', 2016, '48000', 310, 'tebal', '17:02:47', '17:02:47', 5),
(16, 'DETEKTIF CONAN : DIMENSIONAL SNIPER 2', 'Terjadi kasus penembakan mengerikan di bell tree tower! Hunter yang jadi tersangka utama tewas, investigasi pun mengalami kebuntuan.', 'http://localhost:8080/uploads/1705831643114-detektif-conan-dimensional-sniper-2.jpg', 2017, '14500', 100, 'tipis', '17:03:16', '17:07:23', 5),
(17, 'SEWU DINO', 'Di dalam ruangan inilah nanti kamu bekerja. ucap mbah tamin sambil membuka pintu. Seketika, bau busuk langsung tercium. Sri mematung.', 'http://localhost:8080/uploads/1705831465995-sewu-dino.jpg', 2021, '70125', 150, 'sedang', '17:04:26', '17:04:26', 4);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` time NOT NULL,
  `updated_at` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Super Hero Marvel', '16:11:33', '16:11:33'),
(2, 'Super Hero DC', '16:11:39', '16:11:39'),
(3, 'Anime', '16:11:42', '16:11:42'),
(4, 'Horror', '16:11:46', '16:11:46'),
(5, 'Detektif', '16:11:49', '16:11:49');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `originalname` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `filename`, `originalname`, `size`, `file_path`) VALUES
(1, '1705828503870-1.jpg', '1.jpg', 90963, 'uploads/1705828503870-1.jpg'),
(2, '1705828552523-2.jpg', '2.jpg', 19385, 'uploads/1705828552523-2.jpg'),
(3, '1705828637610-3.jpg', '3.jpg', 22306, 'uploads/1705828637610-3.jpg'),
(4, '1705828712942-4.jpg', '4.jpg', 36610, 'uploads/1705828712942-4.jpg'),
(5, '1705828899269-5.jpg', '5.jpg', 9411, 'uploads/1705828899269-5.jpg'),
(6, '1705829292198-batman-nightwalker.jpg', 'batman-nightwalker.jpg', 83542, 'uploads/1705829292198-batman-nightwalker.jpg'),
(7, '1705829348595-wonder-woman-warbringer.jpg', 'wonder-woman-warbringer.jpg', 44492, 'uploads/1705829348595-wonder-woman-warbringer.jpg'),
(8, '1705829346988-wonder-woman-warbringer.jpg', 'wonder-woman-warbringer.jpg', 44492, 'uploads/1705829346988-wonder-woman-warbringer.jpg'),
(9, '1705829450413-robin-hood.jpg', 'robin-hood.jpg', 14406, 'uploads/1705829450413-robin-hood.jpg'),
(10, '1705831173158-one-punch-man-12.jpg', 'one-punch-man-12.jpg', 18793, 'uploads/1705831173158-one-punch-man-12.jpg'),
(11, '1705831207399-one-punch-man-18.jpg', 'one-punch-man-18.jpg', 39818, 'uploads/1705831207399-one-punch-man-18.jpg'),
(12, '1705831233738-one-punch-man-15.jpg', 'one-punch-man-15.jpg', 122404, 'uploads/1705831233738-one-punch-man-15.jpg'),
(13, '1705831258492-one-punch-man-11.jpg', 'one-punch-man-11.jpg', 17378, 'uploads/1705831258492-one-punch-man-11.jpg'),
(14, '1705831289889-demon-king-53.jpg', 'demon-king-53.jpg', 62438, 'uploads/1705831289889-demon-king-53.jpg'),
(15, '1705831346222-sherlock-lupin-dan-aku-3-cover-baru-misteri-mawar-merah.jpg', 'sherlock-lupin-dan-aku-3-cover-baru-misteri-mawar-merah.jpg', 173039, 'uploads/1705831346222-sherlock-lupin-dan-aku-3-cover-baru-misteri-mawar-merah.jpg'),
(16, '1705831367576-sherlock-lupin-dan-aku-2-babak-terakhir-drama-opera.jpg', 'sherlock-lupin-dan-aku-2-babak-terakhir-drama-opera.jpg', 140015, 'uploads/1705831367576-sherlock-lupin-dan-aku-2-babak-terakhir-drama-opera.jpg'),
(17, '1705831396589-detektif-conan-dimensional-sniper-2.jpg', 'detektif-conan-dimensional-sniper-2.jpg', 126100, 'uploads/1705831396589-detektif-conan-dimensional-sniper-2.jpg'),
(18, '1705831465995-sewu-dino.jpg', 'sewu-dino.jpg', 22897, 'uploads/1705831465995-sewu-dino.jpg'),
(19, '1705831643114-detektif-conan-dimensional-sniper-2.jpg', 'detektif-conan-dimensional-sniper-2.jpg', 126100, 'uploads/1705831643114-detektif-conan-dimensional-sniper-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `registered` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `registered`) VALUES
(1, 'admin', 'admin', '2024-01-21 16:10:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
