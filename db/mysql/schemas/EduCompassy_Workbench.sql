

CREATE SCHEMA IF NOT EXISTS `educompassy` DEFAULT CHARACTER SET utf16 COLLATE utf16_bin;

USE educompassy;

-- Table users:
-- -----------

CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`userid` varchar(45) NOT NULL,
	`email` varchar(45) NOT NULL,
	`password` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

-- Table admin:
-- -----------
CREATE TABLE IF NOT EXISTS `educompassy`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NULL,
  `date_of_employment` DATE NOT NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Table parents:
-- -------------

CREATE TABLE IF NOT EXISTS `educompassy`.`parents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Table students:
-- --------------

CREATE TABLE IF NOT EXISTS `educompassy`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NULL,
  `phone_number` INT NULL,
  `id_number` INT NULL,
  PRIMARY KEY (`id`));

-- Table teachers:
-- --------------

CREATE TABLE IF NOT EXISTS `educompassy`.`teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_names` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `date_of_birth` VARCHAR(45) NOT NULL,
  `date_of_employment` DATE NOT NULL,
  `phone_number` INT NOT NULL,
  `id_number` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Table classes:
-- -------------
CREATE TABLE IF NOT EXISTS `educompassy`.`classes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `date_of_start` VARCHAR(45) NULL,
  `date_of_end` DATE NOT NULL,
  `date_of_OverDate` DATE NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Table subject:
-- --------------

CREATE TABLE IF NOT EXISTS `educompassy`.`subject` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Table events:
-- ------------

CREATE TABLE IF NOT EXISTS `educompassy`.`events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `eventID` INT NOT NULL,
  `eventType` varchar(20) NOT NULL,
  `timeStamp` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table homework:
-- --------------

CREATE TABLE IF NOT EXISTS `educompassy`. `homework` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `teacher_id` INTEGER NOT NULL,
  `class_id` INTEGER NOT NULL ,
  `subject_name` VARCHAR(256) NOT NULL,
  `text_box` VARCHAR(256) NOT NULL,

  PRIMARY KEY (`id`)
);

-- Table marks:
-- -----------

CREATE TABLE IF NOT EXISTS `educompassy`. `marks` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `teacher_id` INTEGER NOT NULL,
  `class_id` INTEGER NOT NULL ,
  `subject_name` VARCHAR(256) not NULL ,
  `marks_value`INTEGER NOT NULL,
  `text_box` VARCHAR(256) not NULL ,

  PRIMARY KEY (`id`)
);

-- Table reports:
-- -------------

CREATE TABLE IF NOT EXISTS `educompassy`. `reports` (
  `report_id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `report_name` VARCHAR(256) NOT NULL,
  `subject_name` VARCHAR(256) NOT NULL,
  `text_box` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`report_id`)
);

-- Table timetable:
-- ---------------

CREATE TABLE IF NOT EXISTS `educompassy`. `timetable` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room` varchar(10) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` DATE NOT NULL,
  `teacher_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table complian:
-- -------------

CREATE TABLE IF NOT EXISTS `educompassy`.`complaints` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_of_send` VARCHAR(45) NULL,
  `date_of_process` VARCHAR(45) NULL,
  `parents_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `parent_name` VARCHAR(45) NULL,
  `title`VARCHAR(45) NULL,
  `message`VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

-- ---------------
-- ***************
-- ---------------







    






