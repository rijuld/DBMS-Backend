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
INSERT INTO patient values(0,'rijul','dahiya','9999-12-31 23:59:59',1,1,1,1,'hello',1,1,1,1,'hello',1,'A+','M','9999-12-31 23:59:59','rohtak','haryana','124001','second','1358','none','2017-06-15');
*/