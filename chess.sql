--
-- Database: `chess`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(11) NOT NULL,
  `user` varchar(45) NOT NULL,
  `pass` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `user`, `pass`, `email`) VALUES
(4, 'test', '1234', 'tsarutg@gmail.com'),
(5, 'qwe', '123', 'rfrf'),
(6, 'ttt', '123', 'tt');

-- --------------------------------------------------------

--
-- Table structure for table `playquiz`
--

CREATE TABLE `playquiz` (
  `quiz_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `time` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `learn_CH` varchar(8) NOT NULL,
  `learn_TH` varchar(7) NOT NULL,
  `learn_IN` varchar(7) NOT NULL,
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`learn_CH`, `learn_TH`, `learn_IN`, `member_id`) VALUES
('00000000', '0000000', '0000000', 6);

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quiz_id` int(11) NOT NULL,
  `quizName` varchar(45) NOT NULL,
  `quizDetail` varchar(150) DEFAULT NULL,
  `rankQuiz` int(11) NOT NULL,
  `quizDir` varchar(150) NOT NULL,
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quizask`
--

CREATE TABLE `quizask` (
  `CH` int(11) NOT NULL DEFAULT '0',
  `TH` int(11) NOT NULL DEFAULT '0',
  `IN` int(11) NOT NULL DEFAULT '0',
  `ALL` int(11) NOT NULL DEFAULT '0',
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quizask`
--

INSERT INTO `quizask` (`CH`, `TH`, `IN`, `ALL`, `member_id`) VALUES
(0, 0, 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE `rank` (
  `quiz_CH` int(11) NOT NULL DEFAULT '0',
  `quiz_TH` int(11) NOT NULL DEFAULT '0',
  `quiz_IN` int(11) NOT NULL DEFAULT '0',
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`quiz_CH`, `quiz_TH`, `quiz_IN`, `member_id`) VALUES
(0, 0, 0, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `playquiz`
--
ALTER TABLE `playquiz`
  ADD KEY `fk_PLAYQUIZ_QUIZ1_idx` (`quiz_id`),
  ADD KEY `fk_PLAYQUIZ_MEMBER1_idx` (`member_id`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `learn_CH` (`learn_CH`,`learn_TH`,`learn_IN`,`member_id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`),
  ADD KEY `fk_QUIZ_MEMBER1_idx` (`member_id`);

--
-- Indexes for table `quizask`
--
ALTER TABLE `quizask`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `rank`
--
ALTER TABLE `rank`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `fk_RANK_MEMBER1_idx` (`member_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `playquiz`
--
ALTER TABLE `playquiz`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quizask`
--
ALTER TABLE `quizask`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `rank`
--
ALTER TABLE `rank`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `progress_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizask`
--
ALTER TABLE `quizask`
  ADD CONSTRAINT `quizask_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rank`
--
ALTER TABLE `rank`
  ADD CONSTRAINT `rank_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
