--------------------------------------------------------
--  File created - Tuesday-December-26-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ADMISSION_RESULT
--------------------------------------------------------

  CREATE TABLE "ACADEMIA_PLUS_NEW"."ADMISSION_RESULT" 
   (	"APPLICANT_ID" VARCHAR2(6 BYTE), 
	"RESULT" VARCHAR2(20 BYTE), 
	"TIME" VARCHAR2(2000 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into ACADEMIA_PLUS_NEW.ADMISSION_RESULT
SET DEFINE OFF;
