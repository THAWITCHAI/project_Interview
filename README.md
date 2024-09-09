## data base
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2024 at 11:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `list_leaves`
--

CREATE TABLE `list_leaves` (
  `id` int(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `type_leave` varchar(255) NOT NULL,
  `type_other` varchar(255) NOT NULL DEFAULT '-',
  `cause_leave` varchar(255) NOT NULL,
  `date_s` varchar(255) NOT NULL,
  `date_e` varchar(255) NOT NULL,
  `other_leave` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT current_timestamp(),
  `sid` int(100) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `list_leaves`
--

INSERT INTO `list_leaves` (`id`, `name`, `role`, `email`, `phone_number`, `type_leave`, `type_other`, `cause_leave`, `date_s`, `date_e`, `other_leave`, `create_at`, `sid`) VALUES
(3, 'Thawitchai Boonsong', 'Web dev', 'thawitchai@gmail.com', '0652974104', 'ลากิจ', '-', 'คิดถึงครอบครัว', '2024-09-09', '2024-09-27', 'ลากิจ', '2024-09-09 16:36:14', 1),
(4, 'John Doe', 'programmer', 'john@gmail.com', '0641669191', 'ลากิจ', '-', '-', '2024-09-28', '2024-09-28', 'ลากิจ', '2024-09-09 16:36:34', 1),
(5, 'pam', 'math', 'pam@gmail.com', '065-xxx-xxxx', 'ลาป่วย', '-', 'ปวดหัวตัวร้อนกลับถึงบ้านเป็นไข้', '2024-09-25', '2024-09-18', 'ลาป่วย', '2024-09-09 16:37:21', 1),
(6, 'that', 'จิตกร', 'that@gmail.com', '065-xxx-xxxx', 'อื่นๆ', 'ไปเที่ยว', 'เหนื่อย', '2545-06-12', '2002-05-14', 'อื่นๆ', '2024-09-09 16:38:49', 1),
(7, 'that', 'จิตกร', 'that@gmail.com', '065-xxx-xxxx', 'อื่นๆ', 'ไปเที่ยว', 'เหนื่อย', '2545-06-12', '2002-05-14', 'อื่นๆ', '2024-09-09 16:38:49', 1),
(8, 'that', 'จิตกร', 'that@gmail.com', '065-xxx-xxxx', 'อื่นๆ', 'ไปเที่ยว', 'เหนื่อย', '2545-06-12', '2002-05-14', 'อื่นๆ', '2024-09-09 16:38:49', 1),
(9, 'Thawitchai Boonsong', 'Web dev', 'thawitchai@gmail.com', '0652974104', 'ลากิจ', '-', 'คิดถึงครอบครัว', '2024-09-09', '2024-09-27', 'ลากิจ', '2024-09-09 16:36:14', 1),
(10, 'Thawitchai Boonsong', 'Web dev', 'thawitchai@gmail.com', '0652974104', 'ลากิจ', '-', 'คิดถึงครอบครัว', '2024-09-09', '2024-09-27', 'ลากิจ', '2024-09-09 16:36:14', 1),
(11, 'pam', 'math', 'pam@gmail.com', '065-xxx-xxxx', 'ลาป่วย', '-', 'ปวดหัวตัวร้อนกลับถึงบ้านเป็นไข้', '2024-09-25', '2024-09-18', 'ลาป่วย', '2024-09-09 16:37:21', 1),
(12, 'pam', 'math', 'pam@gmail.com', '065-xxx-xxxx', 'ลาป่วย', '-', 'ปวดหัวตัวร้อนกลับถึงบ้านเป็นไข้', '2024-09-25', '2024-09-18', 'ลาป่วย', '2024-09-09 16:37:21', 1);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `sid` int(100) NOT NULL,
  `sname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`sid`, `sname`) VALUES
(1, 'รอพิจารณา'),
(2, 'อนุมัติ'),
(3, 'ไม่อนุมัติ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list_leaves`
--
ALTER TABLE `list_leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list_leaves`
--
ALTER TABLE `list_leaves`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `sid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;








## env
MYSQL_URI=mysql://root@localhost/interview_db
