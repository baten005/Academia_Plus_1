--------------------------------------------------------
--  File created - Wednesday-January-17-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table APPLICANTS_BEFORE_PAYMENT
--------------------------------------------------------

  CREATE TABLE "ACADEMIA_PLUS_NEW"."APPLICANTS_BEFORE_PAYMENT" 
   (	"APPLICANT_ID" VARCHAR2(6 BYTE), 
	"APPLICANT_NAME" VARCHAR2(255 BYTE), 
	"MOBILE_NO" VARCHAR2(15 BYTE), 
	"FATHER_NAME" VARCHAR2(255 BYTE), 
	"MOTHER_NAME" VARCHAR2(255 BYTE), 
	"P_ADDRESS" VARCHAR2(255 BYTE), 
	"C_ADDRESS" VARCHAR2(255 BYTE), 
	"DOB" DATE, 
	"CLASS" VARCHAR2(50 BYTE), 
	"IMAGE_ADDRESS" VARCHAR2(255 BYTE), 
	"EMAIL" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into ACADEMIA_PLUS_NEW.APPLICANTS_BEFORE_PAYMENT
SET DEFINE OFF;
Insert into ACADEMIA_PLUS_NEW.APPLICANTS_BEFORE_PAYMENT (APPLICANT_ID,APPLICANT_NAME,MOBILE_NO,FATHER_NAME,MOTHER_NAME,P_ADDRESS,C_ADDRESS,DOB,CLASS,IMAGE_ADDRESS,EMAIL) values ('000005','Abid','+8801743769376','y','g','barishal','barishal',to_date('19-OCT-06','DD-MON-RR'),'ten','1705474927911-128471934_680334119337363_7765641939242131309_n.jpg','abidislam5676@gmail.com');
Insert into ACADEMIA_PLUS_NEW.APPLICANTS_BEFORE_PAYMENT (APPLICANT_ID,APPLICANT_NAME,MOBILE_NO,FATHER_NAME,MOTHER_NAME,P_ADDRESS,C_ADDRESS,DOB,CLASS,IMAGE_ADDRESS,EMAIL) values ('000006','Abid','+8801743769376','y','g','barishal','barishal',to_date('19-OCT-06','DD-MON-RR'),'ten','1705474930846-128471934_680334119337363_7765641939242131309_n.jpg','abidislam5676@gmail.com');
Insert into ACADEMIA_PLUS_NEW.APPLICANTS_BEFORE_PAYMENT (APPLICANT_ID,APPLICANT_NAME,MOBILE_NO,FATHER_NAME,MOTHER_NAME,P_ADDRESS,C_ADDRESS,DOB,CLASS,IMAGE_ADDRESS,EMAIL) values ('000004','sabbir','+8801878507129','kk','ll','barishal','barishal',to_date('09-JUN-00','DD-MON-RR'),'six','1704877761067-20211030_165848 (2).jpg','asrafulislamsabbir72@gmail.com');
--------------------------------------------------------
--  DDL for Trigger APPLICANT_ID_TRIGGER
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "ACADEMIA_PLUS_NEW"."APPLICANT_ID_TRIGGER" 
BEFORE INSERT ON "APPLICANTS_BEFORE_PAYMENT"
FOR EACH ROW
BEGIN
    SELECT TO_CHAR(applicant_id_seq.NEXTVAL, 'FM000000') INTO :NEW.APPLICANT_ID FROM DUAL;
END;
/
ALTER TRIGGER "ACADEMIA_PLUS_NEW"."APPLICANT_ID_TRIGGER" ENABLE;
