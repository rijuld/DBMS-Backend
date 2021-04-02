CREATE TABLE IF NOT EXISTS `patient` (
    `pid` INT AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255),
    `time_of_death` DATETIME,
    `agreement` TINYINT(1) DEFAULT '0' NOT NULL,
    `braindead` TINYINT(1) DEFAULT '0' NOT NULL,
    `icuid` INT,
    `did` INT,
    `password` VARCHAR(255) NOT NULL,
    `pulse` INT,
    `temp` INT,
    `blood_pressure_dis` INT,
    `blood_pressure_sys`INT,
    `comorbidity_status` TEXT,
    `breathing_rate` INT,
    `blood_group` VARCHAR(3) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `admission_date` DATETIME,
    `city` VARCHAR(255),
    `state`VARCHAR(255),
    `pincode`VARCHAR(255),
    `street`VARCHAR(255),
    `house_number`VARCHAR(255),
    `reasons`VARCHAR(255),
    `dob` DATE,
    CONSTRAINT PK_Patient PRIMARY KEY (pid), 
    CONSTRAINT FK_ICU FOREIGN KEY (icuid) REFERENCES icu(icuid),
    CONSTRAINT FK_Doctor FOREIGN KEY (did) REFERENCES doctor(did)

);
/*

*/
/*
1st
*/
CREATE TABLE IF NOT EXISTS `icu` (
    `icuid` INT AUTO_INCREMENT NOT NULL,
    `hospital_name` VARCHAR(255) NOT NULL,
    `capacity` INT,
    `icu_type` INT,
    `registration_no` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255),
    `state`VARCHAR(255),
    `pincode`VARCHAR(255),
    `street`VARCHAR(255),
    `house_number`VARCHAR(255),
    CONSTRAINT PK_ICU PRIMARY KEY (icuid) 
);
/*
INSERT INTO icu values(0,'apex',50,2,'098654','delhi','delhi','124001','second','1358');
INSERT INTO icu values(1,'apex1',49,3,'098623','moradabad','moradabad','124003','third','1222');
INSERT INTO icu values(2,'apex2',48,4,'098635','patiala','patiala','124004','fourth','1111');
INSERT INTO icu values(3,'apex3',47,5,'098453','chandigarh','chandigarh','124005','fifth','1000');
INSERT INTO icu values(4,'apex4',46,6,'098354','mumbai','mumbai','124006','sixth','0999');
INSERT INTO icu values(5,'apex5',45,7,'098643','bangalore','bangalore','124007','seventh','1819');
*/


/*
2nd
*/
CREATE TABLE IF NOT EXISTS `icuphone` (
    `contact_no` VARCHAR(50)  NOT NULL,
    `icuid` INT,
    CONSTRAINT PK_ICUDOC PRIMARY KEY (contact_no), 
    CONSTRAINT FK_ICU2 FOREIGN KEY (icuid) REFERENCES icu(icuid)
);
/*
INSERT INTO icuphone values('8279804883',1);
INSERT INTO icuphone values('8279893823',2);
INSERT INTO icuphone values('8579804823',3);
INSERT INTO icuphone values('8229804823',4);
INSERT INTO icuphone values('8233887923',5);
*/


/*
3rd
*/
CREATE TABLE IF NOT EXISTS `department` (
    `dept_id` INT AUTO_INCREMENT NOT NULL,
   `dept_name` VARCHAR(255) NOT NULL,
   `capacity` INT  NOT NULL,
    CONSTRAINT PK_DEPARTMENT PRIMARY KEY (dept_id,dept_name)
);
/*
INSERT INTO department values(1,'Radiology',50);
INSERT INTO department values(2,'Anaesthesia',50);
INSERT INTO department values(3,'Ophthalmology',50);
INSERT INTO department values(4,'Neonatology',50);
INSERT INTO department values(5,'Neurology',50);
*/


/*
4th
*/
CREATE TABLE IF NOT EXISTS `doctor`(
				`did` INT,
        `post` VARCHAR(40), 
        `dob` DATE,
        `first_name` VARCHAR(40),
        `last_name` VARCHAR(40),
        `gender` VARCHAR(3),
        `dept_id` INT,
        `password` VARCHAR(50),
         CONSTRAINT PK_Doctor PRIMARY KEY (did),
         CONSTRAINT FK_Dept FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

/*
INSERT INTO doctor values(1,'Sr. Doctor','2017-06-15','alice','skitzi','M',1,'iamyou');
INSERT INTO doctor values(2,'Jr. Doctor','2013-02-13','madam','tussad','F',2,'youisme');
INSERT INTO doctor values(3,'Sr. Doctor','2001-06-15','monke','patel','M',3,'meisyou');
INSERT INTO doctor values(4,'Sr. Doctor','2002-01-19','andkda','skndn','F',4,'isyoume');
INSERT INTO doctor values(5,'Jr. Doctor','2002-03-19','anuradha','pandey','F',5,'wtfisthis');
*/



/*
5th
*/
CREATE TABLE IF NOT EXISTS `docphone` (
    `phone_no` VARCHAR(50) NOT NULL,
    `did` INT,
    CONSTRAINT PK_docphone PRIMARY KEY (phone_no), 
    CONSTRAINT FK_did FOREIGN KEY (did) REFERENCES doctor(did)

);

/*
INSERT INTO docphone values('9279804883',1);
INSERT INTO docphone values('9271204823',2);
INSERT INTO docphone values('9271224823',3);
INSERT INTO docphone values('9281644823',4);
INSERT INTO docphone values('9279537923',5);
*/


/*
6th
*/
CREATE TABLE IF NOT EXISTS `icudoc` (
    `did` INT,
    `icuid` INT,
    CONSTRAINT PK_ICUDOC PRIMARY KEY (did,icuid), 
    CONSTRAINT FK_ICU3 FOREIGN KEY (icuid) REFERENCES icu(icuid),
    CONSTRAINT FK_Doctor FOREIGN KEY (did) REFERENCES doctor(did)

);
/*
INSERT INTO icudoc values(1,1);
INSERT INTO icudoc values(2,2);
INSERT INTO icudoc values(3,3);
INSERT INTO icudoc values(4,4);
INSERT INTO icudoc values(5,5);
*/


/*
7th
*/
CREATE TABLE IF NOT EXISTS `patient` (
    `pid` INT AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255),
    `time_of_death` DATETIME,
    `agreement` TINYINT(1) DEFAULT '0' NOT NULL,
    `braindead` TINYINT(1) DEFAULT '0' NOT NULL,
    `icuid` INT,
    `did` INT,
    `password` VARCHAR(255) NOT NULL,
    `pulse` INT,
    `temp` INT,
    `blood_pressure_dis` INT,
    `blood_pressure_sys`INT,
    `comorbidity_status` TEXT,
    `breathing_rate` INT,
    `blood_group` VARCHAR(3) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `admission_date` DATETIME,
    `city` VARCHAR(255),
    `state`VARCHAR(255),
    `pincode`VARCHAR(255),
    `street`VARCHAR(255),
    `house_number`VARCHAR(255),
    `reasons`VARCHAR(255),
    `dob` DATE,
    CONSTRAINT PK_Patient PRIMARY KEY (pid), 
    CONSTRAINT FK_ICU FOREIGN KEY (icuid) REFERENCES icu(icuid),
    CONSTRAINT FK_Doctor1 FOREIGN KEY (did) REFERENCES doctor(did)
    
);
/*
INSERT INTO patient values(1,'a','b','1991-12-31 12:59:59',1,0,4,3,'password0',72,95,80,116,'NONE',12,'A+','M','9999-12-31 23:59:59','a','f','124001','second','1111','none','2017-06-15');
INSERT INTO patient values(2,'b','e','1999-11-03 12:59:59',0,1,4,3,'password1',73,96,81,117,'NONE',13,'B+','F','9999-12-31 23:59:59','b','g','124002','second','1158','none','2017-06-15');
INSERT INTO patient values(3,'c','f','2001-11-03 12:59:59',1,1,4,3,'password2',74,97,82,118,'NONE',14,'AB+','F','9999-12-31 23:59:59','c','h','124003','second','1352','none','2017-06-15');
INSERT INTO patient values(4,'d','g','2003-08-08 12:59:59',0,1,4,3,'password3',75,98,83,119,'NONE',15,'O+','M','9999-12-31 23:59:59','d','i','124004','second','1882','none','2017-06-15');
INSERT INTO patient values(5,'e','h','1978-07-09 12:59:59',0,0,4,3,'password4',76,99,84,120,'NONE',16,'A-','M','9999-12-31 23:59:59','e','j','124005','second','0029','none','2017-06-15');
*/

/*
8th
*/
CREATE TABLE IF NOT EXISTS `patientphone` (
    `phone_no` VARCHAR(50) NOT NULL,
    `pid` INT,
    CONSTRAINT PK_patient_phone PRIMARY KEY (phone_no), 
    CONSTRAINT FK_pid FOREIGN KEY (pid) REFERENCES  patient(pid)
);
/*
INSERT INTO patientphone values('7279879483',1);
INSERT INTO patientphone values('7272998393',2);
INSERT INTO patientphone values('9812804823',3);
INSERT INTO patientphone values('8138804823',4);
INSERT INTO patientphone values('7092887923',5);
*/

/*
9th
*/
create table `organ`(
				`organid` INT,
        `quantity` INT, 
        `organ_name` VARCHAR(20),
        CONSTRAINT PK_Organ PRIMARY KEY (organid)
);

/*
INSERT INTO organ values(1,2,'a');
INSERT INTO organ values(2,2,'b');
INSERT INTO organ values(3,3,'c');
INSERT INTO organ values(4,3,'d');
*/