CREATE TABLE IF NOT EXISTS `licenses` (
  `scriptname` varchar(50) NOT NULL,
  `discordid` longtext NOT NULL,
  `serverip` varchar(50) NOT NULL,
  `endsat` varchar(30) NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `secretkey` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;