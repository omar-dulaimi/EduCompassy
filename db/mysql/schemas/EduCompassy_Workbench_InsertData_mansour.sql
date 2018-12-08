
USE educompassy;

INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('7A', 'Math', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('2', 'Sceince', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('3', 'Atr', '2012-11-01', 123);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('4', 'Music', '2012-11-01', 222);
INSERT INTO `educompassy`.`timetable` (`room`, `subject`, `date`, `teacher_id`) VALUES ('5', 'History', '2012-11-01', 333);


INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('1', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('2', 'party', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('3', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('4', 'meeting', '2005-10-30');
INSERT INTO `educompassy`.`events` (`eventID`, `eventType`, `timeStamp`) VALUES ('5', 'party', '2005-10-30');

  
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Music', 'Blah ');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absantsv', 'Math', 'BlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Sceince', 'BlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'Atr', 'BlahBlahBlahBlahBlahBlah');
INSERT INTO `educompassy`.`reports` (`date`, `report_name`, `subject_name`, `text_box`) VALUES ('2017-11-01', 'absants', 'History', 'BlahBlah');



INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('1', '9', 'Math', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('2', '8', 'Music', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('3', '7', 'Atr', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('4', '6', 'History', 'BLAH BLAH Blah');
INSERT INTO `educompassy`.`homework` (`teacher_id`, `class_id`, `subject_name`, `text_box`) VALUES ('5', '4', 'Sceince', 'BLAH BLAH Blah');


INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Very Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Very Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');
INSERT INTO `educompassy`.`marks` (`date`, `teacher_id`, `class_id`, `subject_name`, `marks_value`, `text_box`) VALUES ('2017-11-01', '32', '11', 'Math', 83, 'Good');


