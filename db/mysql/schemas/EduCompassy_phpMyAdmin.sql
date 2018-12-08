

-- Table users:
-- -----------

CREATE TABLE IF NOT EXISTS `educompassy`.`users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`userid` varchar(45) NOT NULL,
	`email` varchar(45) NOT NULL,
	`password` varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

INSERT INTO `educompassy`.`users` (`userid`, `email`, `password`) VALUES ('a', 'a@a.com', 'aaa');
INSERT INTO `educompassy`.`users` (`userid`, `email`, `password`) VALUES ('b', 'b@b.com', 'bbb');
INSERT INTO `educompassy`.`users` (`userid`, `email`, `password`) VALUES ('c', 'c@c.com', 'ccc');
INSERT INTO `educompassy`.`users` (`userid`, `email`, `password`) VALUES ('d', 'd@d.com', 'ddd');
INSERT INTO `educompassy`.`users` (`userid`, `email`, `password`) VALUES ('e', 'e@e.com', 'eee');


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

INSERT INTO `educompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Aa', 'Aaa', 'Aaaa', '2008-7-04', '2008-7-04', '111', '1111');
INSERT INTO `educompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ab', 'Abb', 'Abbb', '2008-7-04', '2008-7-04', '111', '1111');
INSERT INTO `educompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ac', 'Acc', 'Accc', '2008-7-04', '2008-7-04', '111', '1111');
INSERT INTO `educompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ad', 'Add', 'Addd', '2008-7-04', '2008-7-04', '111', '1111');
INSERT INTO `educompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ae', 'Aee', 'Aeee', '2008-7-04', '2008-7-04', '111', '1111');


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

INSERT INTO `educompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,`phone_number`, `id_number`) VALUES ('Ahamed', 'Azam', 'Jebreel', '1970-1-06', '0795412689', '1');
INSERT INTO `educompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Swmeah', 'Adnan', 'AlRwasheda', '1977-7-04', '0786321098', '2');
INSERT INTO `educompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Muhammed', 'Ghasan', 'Saeed',  '1979-7-05', '0798463245', '3');
INSERT INTO `educompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Samar', 'Kamel', 'Althwabi',  '1975-7-03', '0783215699', '4');
INSERT INTO `educompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Omar', 'Sami', 'Alkhataiba',  '1983-7-08', '0793015698', '5');


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

INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('1', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('2', 'party', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('3', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('4', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('5', 'party', '2005-10-30');


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

INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('1', '9', 'Math', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('2', '8', 'Music', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('3', '7', 'Atr', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('4', '6', 'History', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('5', '4', 'Sceince', 'BLAH BLAH Blah');


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

INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Very Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Very Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');


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

INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Music', 'Blah ');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absantsv', 'Math', 'BlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Sceince', 'BlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Atr', 'BlahBlahBlahBlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'History', 'BlahBlah');


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

INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('7A', 'Math', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('2', 'Sceince', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('3', 'Atr', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('4', 'Music', '2012-11-01', 222);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('5', 'History', '2012-11-01', 333);


-- Table complaints:
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

INSERT INTO `educompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-9', '2018-12-9', '2',  '6');
INSERT INTO `educompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-10', '2018-12-10', '3',  '4');
INSERT INTO `educompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-11', '2018-12-11', '4',  '9');
INSERT INTO `educompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-12', '2018-12-12', '5',  '8');
INSERT INTO `educompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-13', '2018-12-13', '6',  '7');


-- ---------------
-- ***************
-- ---------------

