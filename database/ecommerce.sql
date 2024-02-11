-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2018 at 05:42 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('benar', 'benar');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `mobile_no` int(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`name`, `username`, `mobile_no`, `email`, `password`) VALUES
('emily', 'emily', 712136585, 'emily@yahoo.com', '47e68180813c48be2408b98f5577fb058975820e'),
('justus', 'justus', 734686422, 'justus@gmail.com', '4d1bd7a5ca1cd26bee0df05b6801a6ce9a22196e'),
('kelvin', 'kelvin', 712660519, 'kelvinmutunga4@gmail.com', '16857a0969296f55bf8364debb6feb7b6ac25283'),
('martha', 'kyalo', 7123345, 'martha@gmail', '10c4b89638b8f2cbb543c5e2401c5dff58eab917'),
('david', 'muema', 70008242, 'david@gmail.com', 'aa743a0aaec8f7d7a1f01442503957f4d7a2d634'),
('mulwa', 'mulwa', 0, 'mulwa@gmail.com', '204b9f1899f7f0658e5dd29c5f5d30498a926419'),
('judy', 'mutie', 726797701, 'judy@yahoo.com', '38fc8caea6f2c86986a5520ccffc64fd875c5bd7'),
('kelvin', 'mutunga', 3456789, 'kelvinmutunga1@gmail.com', '3aca8f51192177c642c40c029c7aaad689f73b90');

-- --------------------------------------------------------

--
-- Table structure for table `daily_record`
--

CREATE TABLE IF NOT EXISTS `daily_record` (
  `ID` int(11) NOT NULL,
  `Category` varchar(30) NOT NULL,
  `datadetails` varchar(40) NOT NULL,
  `challeges` varchar(200) NOT NULL,
  `Username` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `daily_record`
--

INSERT INTO `daily_record` (`ID`, `Category`, `datadetails`, `challeges`, `Username`) VALUES
(3, 'Planting', 'Kilele seedelings', 'alot labor work needed', 'kelvin'),
(4, 'Fertilizer application', 'D.A.P 20kgs ', 'The fertilizer requires alot of water to disolve', 'mutunga'),
(5, 'Harvesting', 'harvested 5 sacks of tomatoes', 'poor means of transport', 'judy'),
(6, 'Planting', 'addition  of tomatoes in the firm', 'shortage of water', 'judy'),
(16, 'Pesticide application', 'done to all grops in the first greenhous', 'alot of weeds in the greenhouse', 'judy'),
(17, 'Emergency', 'goats entered into our farm and ate some', 'we saw the goats too late because there are some area which are not fenced', 'kip'),
(18, 'Irrigation', 'watering the newly planted tomatoes', 'shortage of water', 'eunice');

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `ID` int(20) NOT NULL,
  `activity` varchar(20) NOT NULL,
  `type` varchar(30) NOT NULL,
  `challeges` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `Employee_Id` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Mobile` int(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `work` varchar(50) NOT NULL,
  `salary` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Employee_Id`, `username`, `Last_Name`, `Mobile`, `Email`, `work`, `salary`, `password`, `image`) VALUES
('em', 'david', 'david', 700045682, 'david@gmail.com', 'casual', '20000', 'aa743a0aaec8f7d7a1f01442503957f4d7a2d634', ''),
('mm', 'eunice', 'eunice', 726797701, 'eunice@gmail.com', 'supervisor', '50,000', '140986a2650dd029272afd799b0da14326ef4e84', ''),
('ek', 'judy', 'mutunga', 7234567, 'judy@gmail.com', 'casual', '15000', '38fc8caea6f2c86986a5520ccffc64fd875c5bd7', ''),
('Emp5', 'Juma', 'huma', 756566966, 'juma@gmail.com', 'Manager', '50000', '8cb2237d0679ca88db6464eac60da96345513964', ''),
('Emp4', 'Justus', 'Kangwee', 70625896, 'justusndululu@gmail.com', 'Care_Taker', '1750', '8cb2237d0679ca88db6464eac60da96345513964', ''),
('Emp101', 'kelvin', 'mutunga', 712660519, 'kelvinmutunga1@gmail.com', 'casual', '', '3f257be825446a5104a367df228f9aa798753d68', ''),
('Emp2', 'Kelvo', 'mutunga', 745286966, 'kelvo@gmail.com', 'Casual', '20000', '8cb2237d0679ca88db6464eac60da96345513964', ''),
('emp3', 'ken', 'kip', 72456789, 'kipken@gmail.com', 'casual', '20000', 'e807c606ef715ac8f8d17d244b4131627950189e', ''),
('e2', 'kip', 'kip', 73456799, 'kip@yahoo.com', 'casual', '15000', 'e807c606ef715ac8f8d17d244b4131627950189e', ''),
('empp', 'lameck', 'lameck', 2147483647, 'lameck@gmail.com', 'supervisor', '20000', '5137265424af5c135b1655e670c6dcc488d4ad5a', ''),
('emp11', 'musya', 'musya', 2147483647, 'musya@gmail.com', 'casual', '', '3759cc60a7f22b59d28898c5b9cf3ba50aaf3016', '');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `username` varchar(30) NOT NULL,
  `Mobile` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`username`, `Mobile`, `password`) VALUES
('kelvin', '0710486613', 'a2666dd2ad1ee965f72b957a96d97e'),
('wambua', '0706506201', 'f7bd79d386039f2776534e9b4f0552'),
('Elijah', '', 'moki1994'),
('kelvin', '0712660519', 'mutunga');

-- --------------------------------------------------------

--
-- Table structure for table `geff`
--

CREATE TABLE IF NOT EXISTS `geff` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `geff`
--

INSERT INTO `geff` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Grade1', 7000, '3'),
(2, 'Grade1', 7000, '3');

-- --------------------------------------------------------

--
-- Table structure for table `giveupdates`
--

CREATE TABLE IF NOT EXISTS `giveupdates` (
  `news` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `giveupdates`
--

INSERT INTO `giveupdates` (`news`) VALUES
('we shall be having a meeting next week on date 22nd november,2018 near the main gate. purpose to att'),
('as from 19th on monday November, 2018 we shall start preparing our land for planting new crops');

-- --------------------------------------------------------

--
-- Table structure for table `gloriagloria`
--

CREATE TABLE IF NOT EXISTS `gloriagloria` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gloriagloria`
--

INSERT INTO `gloriagloria` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Circular dress', 800, '2'),
(2, 'shoes', 800, '2'),
(3, 'Circular dress', 800, '1');

-- --------------------------------------------------------

--
-- Table structure for table `justus`
--

CREATE TABLE IF NOT EXISTS `justus` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `justus`
--

INSERT INTO `justus` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'jkjk', 567, '1'),
(2, ';lkijuhg', 687, '1'),
(3, '[po', 78, '1'),
(4, 'hosi', 6000, '1'),
(5, 'Grade1', 7000, '1');

-- --------------------------------------------------------

--
-- Table structure for table `kelvin`
--

CREATE TABLE IF NOT EXISTS `kelvin` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kelvin`
--

INSERT INTO `kelvin` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'jkjk', 567, '1'),
(2, '[po', 78, '2'),
(3, '[po', 78, '2'),
(4, 'Grade1', 7000, '1'),
(5, 'best', 2500, '1'),
(6, 'nakuru', 2300, '1'),
(7, 'nakuru', 2300, '1'),
(8, 'nakuru', 2300, '1'),
(9, 'naivasha', 2600, '2'),
(10, 'mandera', 1700, '2');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `username` varchar(50) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`) VALUES
('kelvin', 'mutunga');

-- --------------------------------------------------------

--
-- Table structure for table `mulwa`
--

CREATE TABLE IF NOT EXISTS `mulwa` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mulwa`
--

INSERT INTO `mulwa` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'burundi', 3400, '2');

-- --------------------------------------------------------

--
-- Table structure for table `mutie`
--

CREATE TABLE IF NOT EXISTS `mutie` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mutie`
--

INSERT INTO `mutie` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'jkjk', 567, '1');

-- --------------------------------------------------------

--
-- Table structure for table `mutunga`
--

CREATE TABLE IF NOT EXISTS `mutunga` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mutunga`
--

INSERT INTO `mutunga` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Grade1', 7000, '1'),
(2, 'hgf', 765, '1'),
(3, 'hosi', 6000, '1'),
(4, '', 0, ''),
(5, 'jkjk', 567, '1'),
(6, 'hgf', 765, '1'),
(7, 'hgf', 765, '4'),
(8, 'hgf', 765, '5'),
(9, 'hgf', 765, '5'),
(10, 'nairobi', 1000, '1'),
(11, 'kilifi', 2100, '2'),
(12, 'kilifi', 2100, '1');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(20) NOT NULL,
  `category` varchar(20) NOT NULL,
  `product_image` varchar(999) NOT NULL DEFAULT 'images/home/sale.PNG',
  `product_name` varchar(20) NOT NULL,
  `product_description` text NOT NULL,
  `price` int(15) NOT NULL,
  `quantity` int(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category`, `product_image`, `product_name`, `product_description`, `price`, `quantity`) VALUES
(83, 'Grade2', 'images/home/nakuru.jpg', 'nakuru', 'best and very sweet', 2300, 5),
(84, 'Grade2', 'images/home/kiambu.jpg', 'kiambu', 'high quality', 2400, 4),
(85, 'Grade2', 'images/home/naivasha.jpg', 'naivasha', 'sweet', 2600, 3),
(99, 'Grade2', 'images/home/ghana.jpg', 'ghana', 'best quality', 3100, 4),
(104, 'Grade1', 'images/home/burundi.jpg', 'burundi', 'very beautiful', 3100, 2),
(106, 'Grade1', 'images/home/kakamenga.jpg', 'kakamenga', 'high quality', 3700, 4),
(107, 'Grade1', 'images/home/migori.jpg', 'migori', 'very clean', 3400, 2),
(108, 'Grade3', 'images/home/mombasa.jpg', 'mombasa', 'very sweet', 2000, 8),
(109, 'Grade3', 'images/home/wranda.jpg', 'wranda', 'very fresh', 1900, 7),
(112, 'Grade4', 'images/home/makueni.jpg', 'makueni', 'fresh ', 1400, 5),
(115, 'Grade3', 'images/home/mandera.jpg', 'mandera', 'best quality', 1900, 6);

-- --------------------------------------------------------

--
-- Table structure for table `samsonmwanzia`
--

CREATE TABLE IF NOT EXISTS `samsonmwanzia` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `samsonmwanzia`
--

INSERT INTO `samsonmwanzia` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Dress', 500, '2');

-- --------------------------------------------------------

--
-- Table structure for table `samsonwanjeri`
--

CREATE TABLE IF NOT EXISTS `samsonwanjeri` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `samsonwanjeri`
--

INSERT INTO `samsonwanjeri` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Circular dress', 800, '12'),
(2, 'full uniform', 800, '2'),
(3, 'dress 2', 400, '2'),
(4, 'dress 2', 400, '3'),
(5, 'Dress', 500, '3'),
(6, 'dress 2', 400, '2'),
(7, 'Dress', 500, '2'),
(8, 'engine3', 5800, '1');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(20) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`username`, `password`, `age`, `email`) VALUES
('diana', '1234567890', 3, 'moki@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `timerf`
--

CREATE TABLE IF NOT EXISTS `timerf` (
  `ID` int(50) NOT NULL,
  `timeD` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timerf`
--

INSERT INTO `timerf` (`ID`, `timeD`) VALUES
(11, ''),
(12, '11/22/2018 7:10 PM');

-- --------------------------------------------------------

--
-- Table structure for table `timerp`
--

CREATE TABLE IF NOT EXISTS `timerp` (
  `ID` int(50) NOT NULL,
  `datep` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timerp`
--

INSERT INTO `timerp` (`ID`, `datep`) VALUES
(1, '03/11/2018 12:18 PM'),
(2, '11/27/2018 7:19 PM');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE IF NOT EXISTS `transactions` (
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `username` varchar(20) NOT NULL,
  `confirmation_code` varchar(12) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `city` varchar(20) NOT NULL,
  `total_amount` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_date`, `username`, `confirmation_code`, `mobile_no`, `postal_code`, `city`, `total_amount`) VALUES
('2018-10-12 11:04:33', 'justus', 'GNmJ', '070628658', '3456', 'mwingi', 567),
('2018-10-12 11:04:33', 'justus', 'fgfgkj,', '070628658', '3456', 'mwingi', 687),
('2018-10-12 11:04:33', 'justus', 'Ehjklki90', '070628658', '3456', 'mwingi', 78),
('2018-03-13 17:39:45', 'geff', '6787', '04555', '767687', 'gfhgj', 21000),
('2018-10-12 11:04:33', 'justus', 'EME345JK', '070628658', '3456', 'mwingi', 6000),
('2018-11-14 03:55:38', 'kelvin', 'bghjkm,', '0712660519', '32', 'nairobi', 567),
('2018-11-14 03:55:38', 'kelvin', '5678', '0712660519', '32', 'nairobi', 156),
('2018-10-07 17:27:19', 'mutie', '3234', '0726797701', '432', 'mombasa', 567),
('2018-11-14 03:55:38', 'kelvin', '56789', '0712660519', '32', 'nairobi', 7000),
('2018-10-12 11:04:33', 'justus', '65432', '0734686422', '3456', 'mwingi', 7000),
('2018-11-06 07:45:17', 'mutunga', '345678', '03456789', '563', 'nzambani', 7000),
('2018-10-18 07:17:41', 'mutie', '5678', '0726797701', '', '', 1530),
('2018-11-06 07:45:17', 'mutunga', '5768888', '03456789', '563', 'nzambani', 765),
('2018-11-06 07:45:17', 'mutunga', '4567890', '03456789', '563', 'nzambani', 6000),
('2018-11-06 07:45:17', 'mutunga', '678', '03456789', '563', 'nzambani', 567),
('2018-11-06 07:45:17', 'mutunga', '56789', '03456789', '563', 'nzambani', 0),
('2018-11-06 07:45:17', 'mutunga', '34567', '03456789', '563', 'nzambani', 765),
('2018-11-06 07:45:17', 'mutunga', '5678', '03456789', '563', 'nzambani', 3825),
('2018-11-06 07:45:17', 'mutunga', '45678', '03456789', '563', 'nzambani', 1000),
('2018-11-06 07:45:17', 'mutunga', '8765', '03456789', '563', 'nzambani', 1000),
('2018-11-14 03:55:38', 'kelvin', '3456789', '0712660519', '32', 'nairobi', 2500),
('2018-11-06 07:45:17', 'mutunga', '5678', '03456789', '563', 'nzambani', 2100),
('2018-11-13 15:13:07', 'mulwa', '45678', '00', 'jkl', 'grefas', 2300),
('2018-11-14 03:55:38', 'kelvin', '78', '0712660519', '32', 'nairobi', 2300),
('2018-11-14 04:07:36', 'kelvin', '45678', '0712660519', '', '', 3400);

-- --------------------------------------------------------

--
-- Table structure for table `try`
--

CREATE TABLE IF NOT EXISTS `try` (
  `product_id` int(20) NOT NULL,
  `category` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productimage1` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `try`
--

INSERT INTO `try` (`product_id`, `category`, `product_name`, `description`, `price`, `quantity`, `productimage1`) VALUES
(14, 'Grade3', 'garissa', 'good', 2356, 7, 'kakamenga.jpg'),
(21, 'Grade2', 'burundi', 'very colorful', 3400, 3, 'malindi.jpg'),
(23, 'Grade2', 'kangweni', 'very fresh', 3200, 2, 'kangweni.jpg'),
(25, 'Grade2', 'uganda', 'good one', 3200, 5, 'uganda.jpg'),
(26, 'Grade2', 'nyanza', 'very sweet and bright in colour', 3500, 2, 'nyanza.jpg'),
(27, 'Grade2', 'ethiopia', 'big in size and of high quality', 3600, 2, 'ethiopia.jpg'),
(28, 'Grade2', 'tomato', 'very fresh and of good quality,last for long', 3550, 3, 'tomato.jpg'),
(29, 'Grade3', 'machakos', 'of best size', 2850, 4, 'machakos.jpg'),
(30, 'Grade1', 'nairobi', 'fresh', 4000, 1, 'nairobi.jpg'),
(31, 'Grade2', 'migori', 'very colourful and bright', 4250, 2, 'migori.jpg'),
(32, 'Grade1', 'naivasha', 'good and high quality', 4300, 3, 'naivasha.jpg'),
(33, 'Grade1', 'nyamira', 'best but of small size', 4100, 3, 'nyamira.jpg'),
(34, 'Grade1', 'thika', 'good ones', 4400, 4, 'thika.jpg'),
(35, 'Grade4', 'turkana', 'last for long', 1900, 7, 'turkana.jpg'),
(36, 'Grade4', 'makueni', 'fresh', 1850, 7, 'makueni.jpg'),
(37, 'Grade3', 'mombasa', 'very beautiful', 2300, 4, 'mombasa.jpg'),
(38, 'Grade4', 'mandera', 'sweet ones', 1700, 9, 'mandera.jpg'),
(39, 'Grade4', 'fujika', 'good and high quality', 1790, 7, 'fujika.jpg'),
(41, 'Grade4', 'kitui', 'packed and last for long', 1900, 7, 'kitui.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `update`
--

CREATE TABLE IF NOT EXISTS `update` (
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `news` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE IF NOT EXISTS `updates` (
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `news` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`transaction_date`, `news`) VALUES
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', ''),
('2018-11-14 04:24:25', 'next week on date 22nd and 10am we shall be having a meeting near the main gate');

-- --------------------------------------------------------

--
-- Table structure for table `wambua`
--

CREATE TABLE IF NOT EXISTS `wambua` (
  `id` int(10) NOT NULL,
  `product_name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wambua`
--

INSERT INTO `wambua` (`id`, `product_name`, `price`, `quantity`) VALUES
(1, 'Smart dress', 1200, '2'),
(2, 'Smart dress', 1200, '3'),
(3, 'Grade1', 7000, '1'),
(4, 'Grade1', 7000, '1'),
(5, 'Grade1', 7000, '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `mobile_no` (`mobile_no`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `daily_record`
--
ALTER TABLE `daily_record`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `Employee_Id` (`Employee_Id`);

--
-- Indexes for table `geff`
--
ALTER TABLE `geff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gloriagloria`
--
ALTER TABLE `gloriagloria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `justus`
--
ALTER TABLE `justus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kelvin`
--
ALTER TABLE `kelvin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mulwa`
--
ALTER TABLE `mulwa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mutie`
--
ALTER TABLE `mutie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mutunga`
--
ALTER TABLE `mutunga`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `samsonmwanzia`
--
ALTER TABLE `samsonmwanzia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `samsonwanjeri`
--
ALTER TABLE `samsonwanjeri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `timerf`
--
ALTER TABLE `timerf`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `timerp`
--
ALTER TABLE `timerp`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `try`
--
ALTER TABLE `try`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `wambua`
--
ALTER TABLE `wambua`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daily_record`
--
ALTER TABLE `daily_record`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `geff`
--
ALTER TABLE `geff`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `gloriagloria`
--
ALTER TABLE `gloriagloria`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `justus`
--
ALTER TABLE `justus`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `kelvin`
--
ALTER TABLE `kelvin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `mulwa`
--
ALTER TABLE `mulwa`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mutie`
--
ALTER TABLE `mutie`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mutunga`
--
ALTER TABLE `mutunga`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=116;
--
-- AUTO_INCREMENT for table `samsonmwanzia`
--
ALTER TABLE `samsonmwanzia`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `samsonwanjeri`
--
ALTER TABLE `samsonwanjeri`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `timerp`
--
ALTER TABLE `timerp`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `try`
--
ALTER TABLE `try`
  MODIFY `product_id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `wambua`
--
ALTER TABLE `wambua`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
