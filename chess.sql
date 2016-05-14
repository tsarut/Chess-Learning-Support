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
(3, 'test', '1234', 't@t.t'),
(4, 'test', '1234', 't@t.t'),
(5, 'ttt', 'asdfgh', 'gg'),
(6, 'test2', '1234', 'gg'),
(7, 'test3', '2345', 'gg'),
(8, 'test3', '2345', 'gg');

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
  `learn_CH` binary(8) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0',
  `learn_TH` binary(8) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0',
  `learn_IN` binary(7) NOT NULL DEFAULT '\0\0\0\0\0\0\0',
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  ADD PRIMARY KEY (`member_id`);

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
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `playquiz`
--
ALTER TABLE `playquiz`
  ADD CONSTRAINT `fk_PLAYQUIZ_MEMBER1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_PLAYQUIZ_QUIZ1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `fk_PROGRESS_MEMBER1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `fk_QUIZ_MEMBER1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizask`
--
ALTER TABLE `quizask`
  ADD CONSTRAINT `fk_QUIZSE_MEMBER1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `rank`
--
ALTER TABLE `rank`
  ADD CONSTRAINT `fk_RANK_MEMBER1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
