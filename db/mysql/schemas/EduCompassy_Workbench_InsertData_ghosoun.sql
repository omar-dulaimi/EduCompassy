
USE EduCompassy;

-- INSERT INTO `EduCompassy`.`userid` (`userid`, `email`, `password`) VALUES ('a', 'a@a.com', 'aaa');
-- INSERT INTO `EduCompassy`.`userid` (`userid`, `email`, `password`) VALUES ('b', 'b@b.com', 'bbb');
-- INSERT INTO `EduCompassy`.`userid` (`userid`, `email`, `password`) VALUES ('c', 'c@c.com', 'ccc');
-- INSERT INTO `EduCompassy`.`userid` (`userid`, `email`, `password`) VALUES ('d', 'd@d.com', 'ddd');
-- INSERT INTO `EduCompassy`.`userid` (`userid`, `email`, `password`) VALUES ('e', 'e@e.com', 'eee');

-- INSERT INTO `EduCompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Aa', 'Aaa', 'Aaaa', '2008-7-04', '2008-7-04', '111', '1111');
-- INSERT INTO `EduCompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ab', 'Abb', 'Abbb', '2008-7-04', '2008-7-04', '111', '1111');
-- INSERT INTO `EduCompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ac', 'Acc', 'Accc', '2008-7-04', '2008-7-04', '111', '1111');
-- INSERT INTO `EduCompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ad', 'Add', 'Addd', '2008-7-04', '2008-7-04', '111', '1111');
-- INSERT INTO `EduCompassy`.`admin` (`first_name`, `middle_names`, `last_name`, `date_of_birth`, `date_of_employment`, `phone_number`, `id_number`) VALUES ('Ae', 'Aee', 'Aeee', '2008-7-04', '2008-7-04', '111', '1111');

INSERT INTO `EduCompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,`phone_number`, `id_number`) VALUES ('Ahamed', 'Azam', 'Jebreel', '1970-1-06', '0795412689', '1');
INSERT INTO `EduCompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Swmeah', 'Adnan', 'AlRwasheda', '1977-7-04', '0786321098', '2');
INSERT INTO `EduCompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Muhammed', 'Ghasan', 'Saeed',  '1979-7-05', '0798463245', '3');
INSERT INTO `EduCompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Samar', 'Kamel', 'Althwabi',  '1975-7-03', '0783215699', '4');
INSERT INTO `EduCompassy`.`parents` (`first_name`, `middle_names`, `last_name`, `date_of_birth`,  `phone_number`, `id_number`) VALUES ('Omar', 'Sami', 'Alkhataiba',  '1983-7-08', '0793015698', '5');


INSERT INTO `EduCompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-9', '2018-12-9', '2',  '6');
INSERT INTO `EduCompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-10', '2018-12-10', '3',  '4');
INSERT INTO `EduCompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-11', '2018-12-11', '4',  '9');
INSERT INTO `EduCompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-12', '2018-12-12', '5',  '8');
INSERT INTO `EduCompassy`.`complaints` (`date_of_send`, `date_of_process`, `parents_id`, `teacher_id`) VALUES ('2018-12-13', '2018-12-13', '6',  '7');




CREATE TABLE IF NOT EXISTS `EduCompassy`.`complian` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_of_send` VARCHAR(45) NULL,
  `date_of_process` VARCHAR(45) NULL,
  `parents_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`));